/* eslint-disable camelcase */
import models from '../database/models';

const { User, Credential } = models;

/**
 * Query users by role
 * @param {String} user_role
 * @returns {Promise<User[]>}
 */

const getUsersByRole = async (user_role) => {
  return User.findAll({
    where: { user_role },
  });
};

/**
 * Create a user profile
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createProfile = async (userBody) => {
  const { body, user: userEmail } = userBody;
  const { firstName, lastName, bio, website, country, city, gitHub, linkedIn, instagram, twitter, imageUrl } = body;
  const { email } = userEmail;

  const user = await User.update(
    {
      firstName,
      lastName,
      email,
      bio,
      website,
      country,
      city,
      gitHub,
      instagram,
      linkedIn,
      twitter,
      image_url: imageUrl,
      has_fill_profile: true,
      has_change_password: true,
    },
    {
      where: { email },
      returning: true,
      plain: true,
    }
  );

  return user[1].dataValues;
};

/**
 * Query for users
 * @param {integer} limit
 * @param {integer} page
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (limit, page) => {
  const offset = limit * (page - 1);

  // CREATE???????
  const { count, rows } = await User.findAndCountAll({
    limit,
    offset,
    order: [['updated_at', 'DESC']],
  });

  const pages = Math.ceil(count / limit);
  const currentPage = Math.floor(offset / limit) + 1;
  const nextPage = currentPage === pages ? null : currentPage + 1;
  const prevPage = currentPage === 1 ? null : currentPage - 1;

  return {
    rows,
    meta: {
      limit,
      pages,
      currentPage,
      nextPage,
      prevPage,
    },
  };
};

/**
 * Get user by id
 * @param {string} userId
 * @returns {Promise<User>}
 */
const getUserById = async (userId) => {
  return User.findByPk(userId);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({
    where: {
      email,
    },
    include: { model: Credential },
    raw: true,
    nest: true,
  });
};

export { getUsersByRole, createProfile, queryUsers, getUserById, getUserByEmail };
