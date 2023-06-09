/* eslint-disable camelcase */
import models from '../database/models';

const { Program, ApprovalRequest, User } = models;

/**
 * Create an Program
 * @param {Object} reqbody
 * @param {Object} transaction
 * @returns {Promise<ApprovalRequest>}
 */
const create = async (body) => {
  const { users, ...rest } = body;
  const requests = users.map((user_id) => ({
    user_id,
    status: 'accepted',
    category: 'program',
  }));
  const program = await Program.create(
    {
      ...rest,
      requests,
    },
    {
      include: [
        {
          association: 'requests',
          include: ['user'],
        },
      ],
    }
  );

  return program;
};

/**
 * Update an ApprovalRequest
 * @param {Object} reqbody
 * @param {Program} program
 * @returns {Promise<Program>}
 */
const update = async (body, model) => {
  const { users, ...rest } = body;
  const requests = users.map((user_id) => ({
    user_id,
    status: 'accepted',
    category: 'program',
    program_id: model.program_id,
  }));
  await model.setRequests([]);
  const results = await ApprovalRequest.bulkCreate(requests);
  model.setRequests(results);
  const program = await model.update(rest);
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
  return Program.findByPk(pk, { include: ['users'] });
};

/**
 * Get user's ApprovalRequests
 * @param {Object} reqbody
 */
const findAll = async (page, limit) => {
  const offset = limit * (page - 1);

  const { count, rows } = await Program.findAndCountAll({
    limit,
    offset,
    order: [['updated_at', 'DESC']],
    include: ['users'],
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
const findAllByUserId = async (user_id, page, limit) => {
  const offset = limit * (page - 1);
  const { count, rows } = await Program.findAndCountAll({
    limit,
    offset,
    order: [['updated_at', 'DESC']],
    include: [
      {
        association: 'users',
        where: { user_id },
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
 * Get All Users associate to a program
 * @param {Object} reqbody
 */
const findAllAssignedUsersByRole = async (user_role, program_id, page, limit) => {
  const offset = limit * (page - 1);
  const { count, rows } = await User.findAndCountAll({
    limit,
    offset,
    order: [['updated_at', 'DESC']],
    where: { user_role },
    include: [
      {
        association: 'programs',
        where: { program_id },
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

export { create, update, destroy, findById, findAllByUserId, findAll, findAllAssignedUsersByRole };
