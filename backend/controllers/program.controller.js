/* eslint-disable camelcase */
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { programService } from '../services';

const create = catchAsync(async (req, res) => {
  const { name, description, avatar_url, users } = req.body;
  const program = await programService.create({
    created_by: req.user.id,
    name,
    description,
    avatar_url,
    users,
  });

  res.status(httpStatus.CREATED).json({ success: true, data: program });
});

const findById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const program = await programService.findById(id);
  if (!program) {
    throw new ApiError(httpStatus.NOT_FOUND, `Program request not found`);
  }
  res.status(httpStatus.OK).json({ success: true, data: program });
});

const findAll = catchAsync(async (req, res) => {
  const { page = 1, limit = 50 } = req.body;
  const programs = await programService.findAll(page, limit);
  if (!programs) {
    throw new ApiError(httpStatus.NOT_FOUND, `Program request not found`);
  }
  res.status(httpStatus.OK).json({ success: true, data: programs });
});

const findAllByUserId = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { limit = 50, page = 1 } = req.body;
  const programs = await programService.findAllByUserId(id, page, limit);
  if (!programs) {
    throw new ApiError(httpStatus.NOT_FOUND, `Program request not found`);
  }
  res.status(httpStatus.OK).json({ success: true, data: programs });
});

const update = catchAsync(async (req, res) => {
  const { id } = req.params;
  let program = await programService.findById(id);
  if (!program) {
    throw new ApiError(httpStatus.NOT_FOUND, `Program request not found`);
  }
  program = await programService.update(req.body, program);

  res.status(httpStatus.OK).json({ success: true, data: program });
});

const destroy = catchAsync(async (req, res) => {
  const { id } = req.params;
  let program = await programService.findById(id);
  if (!program) {
    throw new ApiError(httpStatus.NOT_FOUND, `Program request not found`);
  }
  program = await program.destroy();

  res.status(httpStatus.OK).json({ success: true, data: program });
});

const findAllAssignedUsersByRole = catchAsync(async (req, res) => {
  const { program_id, user_role } = req.params;
  const { limit = 50, page = 1 } = req.body;
  const programs = await programService.findAllAssignedUsersByRole(user_role, program_id, page, limit);
  if (!programs) {
    throw new ApiError(httpStatus.NOT_FOUND, `Program request not found`);
  }
  res.status(httpStatus.OK).json({ success: true, data: programs });
});

export { create, findById, update, destroy, findAll, findAllByUserId, findAllAssignedUsersByRole };
