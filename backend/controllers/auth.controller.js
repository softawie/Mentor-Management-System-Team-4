import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { authService } from '../services';

const createUser = catchAsync(async (req, res) => {
  const user = await authService.createUser(req.body);
  res.status(httpStatus.CREATED).json({ success: true, data: user });
});

const login = catchAsync(async (req, res) => {
  const user = await authService.loginUser(req.body);

  res.status(httpStatus.OK).json({ user });
});

const forgotPassword = catchAsync(async (req, res) => {
  const user = await authService.requestPasswordReset(req, res);

  return user;
});

const resetPassword = catchAsync(async (req, res) => {
  const user = await authService.resetPassword(req, res);

  return user;
});

const changePassword = catchAsync(async (req, res) => {
  const user = await authService.changePassword(req, res);

  return user;
});

export { createUser, login, forgotPassword, resetPassword, changePassword };
