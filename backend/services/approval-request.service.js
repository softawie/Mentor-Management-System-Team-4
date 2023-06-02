/* eslint-disable camelcase */
import models from '../database/models';

const { ApprovalRequest, User } = models;

/**
 * Create an ApprovalRequest
 * @param {Object} reqbody
 * @param {Object} transaction
 * @returns {Promise<ApprovalRequest>}
 */
const create = async (body) => {
  const { category, user_id } = body;
  return ApprovalRequest.create({
    user_id,
    category,
  });
};

/**
 * Update an ApprovalRequest
 * @param {Object} reqbody
 * @param {Object} transaction
 * @returns {Promise<ApprovalRequest>}
 */
const update = async (body, request_id) => {
  return ApprovalRequest.update(body, { where: { request_id } });
};

/**
 * Delete an ApprovalRequest
 * @param {Object} reqbody
 */
const destroy = async (request_id) => {
  return ApprovalRequest.destroy({ where: { request_id } });
};

/**
 * Delete an ApprovalRequest
 * @param {Object} reqbody
 */
const findById = async (pk) => {
  return ApprovalRequest.findByPk(pk);
};

/**
 * Get user's ApprovalRequests
 * @param {Object} reqbody
 */
const findAll = async (limit, page) => {
  const offset = limit * (page - 1);

  const { count, rows } = await ApprovalRequest.findAndCountAll({
    limit,
    offset,
    order: [['updated_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: { exclude: ['reset_password_code', 'password_code_expire', 'has_change_password', 'has_fill_profile'] },
      },
    ],
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
 * Get All ApprovalRequests
 * @param {Object} reqbody
 */
const findAllByUserId = async (user_id) => {
  return ApprovalRequest.findAll({
    where: { user_id },
    include: [
      {
        model: User,
        attributes: { exclude: ['reset_password_code', 'password_code_expire', 'has_change_password', 'has_fill_profile'] },
      },
    ],
  });
};

/**
 * Get All ApprovalRequests by category
 * @param {Object} reqbody
 */
const findAllByCategory = async (category) => {
  return ApprovalRequest.findAll({
    where: { category },
    include: [
      {
        model: User,
        attributes: { exclude: ['reset_password_code', 'password_code_expire', 'has_change_password', 'has_fill_profile'] },
      },
    ],
  });
};

export { create, update, destroy, findById, findAllByUserId, findAll, findAllByCategory };
