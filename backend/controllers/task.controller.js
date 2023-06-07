/* eslint-disable camelcase */
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { taskService } from '../services';

const create = catchAsync(async (req, res) => {
  const task = await taskService.create(req.body);

  res.status(httpStatus.CREATED).json({ success: true, data: task });
});

const findById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const task = await taskService.findById(id);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, `task not found`);
  }
  res.status(httpStatus.OK).json({ success: true, data: task });
});

const findAll = catchAsync(async (req, res) => {
  const { page = 1, limit = 50 } = req.body;
  const tasks = await taskService.findAll(page, limit);
  if (!tasks) {
    throw new ApiError(httpStatus.NOT_FOUND, `task not found`);
  }
  res.status(httpStatus.OK).json({ success: true, data: tasks });
});

const findAllByUserId = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { limit = 50, page = 1 } = req.body;
  const tasks = await taskService.findAllByUserId(id, page, limit);
  if (!tasks) {
    throw new ApiError(httpStatus.NOT_FOUND, `task not found`);
  }
  res.status(httpStatus.OK).json({ success: true, data: tasks });
});

const update = catchAsync(async (req, res) => {
  const { id } = req.params;
  let task = await taskService.findById(id);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, `task not found`);
  }
  task = await taskService.update(req.body, task);

  res.status(httpStatus.OK).json({ success: true, data: task });
});

const destroy = catchAsync(async (req, res) => {
  const { id } = req.params;
  let task = await taskService.findById(id);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, `task not found`);
  }
  task = await task.destroy();

  res.status(httpStatus.OK).json({ success: true, data: task });
});

const findAssignedUsersByTask = catchAsync(async (req, res) => {
  const { task_id } = req.params;
  const { limit = 50, page = 1 } = req.body;
  const tasks = await taskService.findAssignedUsersByTask(task_id, page, limit);
  if (!tasks) {
    throw new ApiError(httpStatus.NOT_FOUND, `task not found`);
  }
  res.status(httpStatus.OK).json({ success: true, data: tasks });
});

export { create, findById, update, destroy, findAll, findAllByUserId, findAssignedUsersByTask };
