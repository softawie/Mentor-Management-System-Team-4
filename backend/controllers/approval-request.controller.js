/* eslint-disable camelcase */
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { ApprovalRequestService, userService } from '../services';

const createApprovalRequest = catchAsync(async (req, res) => {
  const { email, category, program_id } = req.body;
  const user = await userService.getUserByEmail(email);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, `User with email: ${email} not found`);
  }
  const approval = await ApprovalRequestService.create({
    user_id: user.user_id,
    category,
    program_id,
  });
  res.status(httpStatus.CREATED).json({ success: true, data: approval });
});

const updateApprovalRequest = catchAsync(async (req, res) => {
  const { id } = req.params;
  const approval = await ApprovalRequestService.findById(id);
  if (!approval) {
    throw new ApiError(httpStatus.NOT_FOUND, `Approval request not found`);
  }
  approval.update(req.body);

  res.status(httpStatus.OK).json({ success: true, data: approval });
});

const getApprovalRequests = catchAsync(async (req, res) => {
  const { limit = 50, page = 1 } = req.query;
  const approvals = await ApprovalRequestService.findAll(limit, page);
  res.status(httpStatus.OK).json({ success: true, data: approvals });
});

const getApprovalRequestById = catchAsync(async (req, res) => {
  const { id } = req.query;
  const approval = await ApprovalRequestService.findById(id);
  if (!approval) {
    throw new ApiError(httpStatus.NOT_FOUND, `Approval request not found`);
  }
  res.status(httpStatus.OK).json({ success: true, data: approval });
});
const findAllByCategory = catchAsync(async (req, res) => {
  const { category } = req.params;
  const approval = await ApprovalRequestService.findAllByCategory(category);
  if (!approval) {
    throw new ApiError(httpStatus.NOT_FOUND, `Approval request not found`);
  }
  res.status(httpStatus.OK).json({ success: true, data: approval });
});

export { createApprovalRequest, updateApprovalRequest, getApprovalRequests, getApprovalRequestById, findAllByCategory };
