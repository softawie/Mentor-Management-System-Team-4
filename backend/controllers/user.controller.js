/* eslint-disable camelcase */
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { userService, ApprovalRequestService } from '../services';

const updateProfile = catchAsync(async (req, res) => {
  const { id } = req.params;
  let user = await userService.getUserById(id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  user = await userService.updateProfile(req.body, id);
  res.status(httpStatus.CREATED).json({ success: true, data: user });
});

const getUsers = catchAsync(async (req, res) => {
  const { limit = 10, page = 1 } = req.params;
  const result = await userService.queryUsers(limit, page);

  res.status(httpStatus.OK).json({ success: true, data: result });
});

const getUserById = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  res.status(httpStatus.OK).json({ success: true, data: user });
});

const getUsersByRole = catchAsync(async (req, res) => {
  const users = await userService.getUsersByRole(req.params.role);
  if (!users) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Users not found');
  }

  res.status(httpStatus.OK).json({ success: true, data: users });
});

const getUserApprovalRequests = catchAsync(async (req, res) => {
  const { id } = req.params;
  const approvals = await ApprovalRequestService.findAllByUserId(id);
  res.status(httpStatus.OK).json({ success: true, data: approvals });
});

export { updateProfile, getUsers, getUserById, getUsersByRole, getUserApprovalRequests };
