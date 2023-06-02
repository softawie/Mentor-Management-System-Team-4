/* eslint-disable camelcase */
import { Op } from 'sequelize';
import models from '../database/models';

const { Program, User, ApprovalRequest } = models;

/**
 * Create an Program
 * @param {Object} reqbody
 * @param {Object} transaction
 * @returns {Promise<ApprovalRequest>}
 */
const create = async (body) => {
  const { name, description, created_by, avatar_url, users } = body;
  const program = await Program.create({
    name,
    description,
    avatar_url,
    created_by,
  });
  const requests = users.map((user_id) => ({
    user_id,
    program_id: program.program_id,
    status: 'accepted',
    category: 'program',
  }));
  await Program.bulkCreate(requests);
  return program;
};

/**
 * Update an ApprovalRequest
 * @param {Object} reqbody
 * @param {Object} transaction
 * @returns {Promise<ApprovalRequest>}
 */
const update = async (body, program_id) => {
  const { users, ...rest } = body;
  const program = await Program.update(rest, { where: { program_id } });
  if (users) {
    await ApprovalRequest.destroy({
      where: {
        user_id: { [Op.notIn]: users },
        program_id,
      },
    });
    users.map(async (user_id) => {
      await ApprovalRequest.upsert({
        status: 'accepted',
        category: 'program',
        program_id,
        user_id,
      });
    });
  }
  return program;
};

/**
 * Delete an ApprovalRequest
 * @param {Object} reqbody
 */
const destroy = async (program_id) => {
  return Program.destroy({ where: { program_id } });
};

/**
 * Delete an ApprovalRequest
 * @param {Object} reqbody
 */
const findById = async (pk) => {
  return Program.findByPk(pk);
};

/**
 * Get user's ApprovalRequests
 * @param {Object} reqbody
 */
const findAll = async (limit, page) => {
  const offset = limit * (page - 1);

  const { count, rows } = await Program.findAndCountAll({
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
  return Program.findAll({
    where: { user_id },
    include: [
      {
        model: User,
        attributes: { exclude: ['reset_password_code', 'password_code_expire', 'has_change_password', 'has_fill_profile'] },
      },
    ],
  });
};

export { create, update, destroy, findById, findAllByUserId, findAll };
