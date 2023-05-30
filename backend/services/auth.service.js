/* eslint-disable camelcase */
import bcrypt from 'bcryptjs';
import { nanoid } from 'nanoid';
import config from '../config/config';
import models from '../database/models';
import utils from '../utils/auth';
import { sendEmail, sendResetPasswordEmail } from './email.service';
import { generateToken } from './token.service';
import { getUserByEmail } from './user.service';

const { User, Credential, Setting } = models;
const { hashPassword } = utils;

/**
 * Create a user
 * @param {Object} userBody
 * @param {Object} transaction
 * @returns {Promise<User>}
 */
const createUser = async (body, transaction) => {
  const { email, user_role, loginType } = body;

  // insert into users table
  const t = transaction;
  let payload;

  const [{ dataValues }, created] = await User.findOrCreate({
    where: { email },
    includes: { model: Credential },
    defaults: { email, user_role: user_role || 'admin' },
    transaction: t,
  });

  let user = dataValues;

  const password = nanoid();

  if (created) {
    if (loginType) {
      payload = {
        user_id: user.user_id,
        login_type: loginType || 'local',
      };
    } else {
      const hashedPassword = await hashPassword(password);

      payload = {
        user_id: user.user_id,
        hashed_password: hashedPassword,
        login_type: 'local',
      };
    }

    const credentials = await Credential.create(payload, {
      transaction: t,
    });

    await Setting.create(
      {
        user_id: user.user_id,
      },
      {
        transaction: t,
      }
    );

    // remove password from credential data
    delete credentials.dataValues.hashed_password;
    user = { ...user, ...credentials.dataValues };

    await sendEmail(
      user.email,
      'Mentor Manager System Account',
      `
    Dear ${user_role.charAt(0).toUpperCase() + user_role.slice(1)},
    Welcome to join MMS.
    Kindly find below your credentials:
    login:  ${user.email}
    password: ${password}
    MMS URL: ${config.client_url}
    Kindly change your password and update your profile.
  
    Best Regards,
    MMS Account Manager
  
    `
    );
  }

  return user;
};

/**
 * @description - calls function that request for password reset
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} Response object
 */
const loginUser = async (body) => {
  const { password, email } = body;

  const user = await getUserByEmail(email);

  if (user && user.Credential.login_type !== 'local') {
    return {
      status: 400,
      success: false,
      error: 'please sign in through your google account',
    };
  }

  if (!user) {
    return {
      status: 401,
      success: false,
      error: 'invalid email or password',
    };
  }

  const { user_id: id, Credential: credential } = user;

  // check password
  const validPassword = await bcrypt.compare(password, credential.hashed_password);

  if (!validPassword) {
    return {
      status: 401,
      success: false,
      error: 'invalid email or password',
    };
  }

  const token = await generateToken({
    id,
    email,
  });

  delete user.Credential;

  return {
    success: true,
    token,
    data: user,
  };
};

/**
 * @description - Function to update credentials table
 * @param {Object} payload
 * @param {Integer} userId
 */
const updateCredential = async (payload, userId) => {
  await Credential.update(payload, {
    where: {
      user_id: userId,
    },
    returning: true,
    raw: true,
  });
};

/**
 * @description - Function to get credentials from the table
 * @param {Integer} userId
 */
const getUserCredential = (userId) => {
  return Credential.findOne({
    where: {
      user_id: userId,
    },
    raw: true,
  });
};

/**
 * @description - calls function that request for password reset
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} Response object
 */
const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No user found',
      });
    }

    const { user_id: userId } = user;

    const passToken = generateToken({ userId });

    const passcode = nanoid(5);

    await sendResetPasswordEmail(email, passcode);

    const date = new Date();

    date.setDate(date.getDate() + 1);

    await User.update(
      { reset_password_code: passcode },
      {
        where: { email },
      }
    );

    return res.status(201).json({
      success: true,
      passToken,
      message: 'you will receive a mail, if you signed up with this email',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

/**
 * @description - calls function that modify user's password
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} Response object
 */
const changePassword = async (req, res) => {
  const { id } = req.user;
  const { password, currentPassword } = req.body;

  try {
    const userCredential = await getUserCredential(id);
    const valid = await bcrypt.compare(currentPassword, userCredential.hashed_password);

    if (!valid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid password',
      });
    }

    const newPassword = await hashPassword(password);

    // if valid previous password, update the password
    await updateCredential({ hashed_password: newPassword }, id);

    return res.status(200).json({
      success: true,
      message: 'Password changed successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'something went wrong',
    });
  }
};

/**
 * @description - calls function that request for password reset
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} Response object
 */
const resetPassword = async (req, res) => {
  const { password, passcode } = req.body;
  try {
    if (!passcode) {
      return res.status(401).json({
        status: 401,
        success: false,
        message: 'Action not permitted',
      });
    }

    const user = await User.findOne({ where: { reset_password_code: passcode } });

    // const { userId } = await jwt.verify(token, config.jwt.secret);

    if (!user) {
      return res.status(401).json({
        status: 401,
        success: false,
        message: 'Invalid passcode provided',
      });
    }

    // const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No such user',
      });
    }

    const newPassword = await hashPassword(password);

    // if user, update the password
    await updateCredential({ hashed_password: newPassword }, user.user_id);

    await User.update(
      { reset_password_code: null },
      {
        where: { user_id: user.user_id },
      }
    );

    return res.status(200).json({
      success: true,
      message: 'Password updated successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'something went wrong',
    });
  }
};

export { createUser, requestPasswordReset, loginUser, updateCredential, resetPassword, changePassword, getUserCredential };
