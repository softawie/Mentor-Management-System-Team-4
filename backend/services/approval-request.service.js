/* eslint-disable camelcase */
import models from '../database/models';

const { ApprovalRequest } = models;

/**
 * Create an ApprovalRequest
 * @param {Object} reqbody
 * @param {Object} transaction
 * @returns {Promise<ApprovalRequest>}
 */
const create = async (body) => {
  const { role, user_id } = body;
  return ApprovalRequest.create({
    user_id,
    role,
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
const findAll = async () => {
  return ApprovalRequest.findAll();
};
/**
 * Get All ApprovalRequests
 * @param {Object} reqbody
 */
const findAllUserId = async (user_id) => {
  return ApprovalRequest.findAll({ where: { user_id } });
};

export { create, update, destroy, findById, findAllUserId, findAll };
