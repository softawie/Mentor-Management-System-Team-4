/* eslint-disable camelcase */
import models from '../database/models';

const { User } = models;

/**
 * Query users by role
 * @param {String} user_role
 * @returns {Promise<User[]>}
 */

const getUsersByRole = async (user_role) => {
  return User.findAll({
    where: { user_role },
    attributes: { exclude: ['reset_password_code'] },
  });
};

/**
 * Create a user profile
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const updateProfile = async (body, user_id) => {
  const { imageUrl, ...rest } = body;

  const user = await User.update(
    {
      image_url: imageUrl,
      ...rest,
      has_fill_profile: true,
      has_change_password: true,
    },
    {
      where: { user_id },
      attributes: { exclude: ['reset_password_code', 'password_code_expire'] },
      returning: true,
      plain: true,
    }
  );

  return user;
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
    include: ['credential'],
    raw: true,
    nest: true,
  });
};

export { getUsersByRole, updateProfile, queryUsers, getUserById, getUserByEmail };
