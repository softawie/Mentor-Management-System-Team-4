/* eslint-disable camelcase */
import { Op } from 'sequelize';
import models from '../database/models';

const { Task, User } = models;

/**
 * Create a task
 * @param {Object} reqbody
 * @param {Object} transaction
 * @returns {Promise<Task>}
 */
const create = async (body) => {
  const { users, ...rest } = body;
  /* const task_users = await User.findAll({
     where: {
       user_id: {
         [Op.in]: users,
       },
     },
   }); */
  const task = await Task.create(
    {
      ...rest,
      user_task: users.map((user_id) => ({ user_id })),
    },
    { include: 'users' }
  );
  //  await task.setUsers(task_users);
  await task.reload({ include: 'users' });
  return task;
};

/**
 * Update task
 * @param {Object} reqbody
 * @param {Program} program
 * @returns {Promise<Program>}
 */
const update = async (body, task) => {
  const { users, ...rest } = body;
  const task_user = await User.findAll({
    where: {
      user_id: {
        [Op.in]: users,
      },
    },
  });
  await task.setUsers(task_user);
  await task.update(rest);
  await task.reload({ include: 'users' });

  return task;
};

/**
 * Delete an Task
 * @param {Object} reqbody
 */
const destroy = async (task_id) => {
  return Task.destroy({ where: { task_id } });
};

/**
 * Find task by id
 * @param {Object} reqbody
 */
const findById = async (pk) => {
  return Task.findByPk(pk, { include: ['users'] });
};

/**
 * Get all tasks
 * @param {Object} reqbody
 */
const findAll = async (page, limit) => {
  const offset = limit * (page - 1);

  const { count, rows } = await Task.findAndCountAll({
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
 * Get All task assigned to a user
 * @param {Object} reqbody
 */
const findAllByUserId = async (user_id, page, limit) => {
  const offset = limit * (page - 1);
  const { count, rows } = await Task.findAndCountAll({
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
 * Get All User assigned to a task
 * @param {Object} reqbody
 */
const findAssignedUsersByTask = async (task_id, page, limit) => {
  const offset = limit * (page - 1);
  const { count, rows } = await User.findAndCountAll({
    limit,
    offset,
    order: [['updated_at', 'DESC']],
    include: [
      {
        association: 'tasks',
        where: { task_id },
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

export { create, update, destroy, findById, findAllByUserId, findAll, findAssignedUsersByTask };
