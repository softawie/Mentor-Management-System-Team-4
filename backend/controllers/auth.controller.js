import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { tokenService, emailService, authService } from '../services';

const register = catchAsync(async (req, res) => {
  const user = await authService.registerUser(req);
  res.status(httpStatus.CREATED).json({ success: true, user });
});

const login = catchAsync(async (req, res) => {
  const user = await authService.loginUser(req.body);

  res.status(httpStatus.OK).json({ user });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateToken(req.body.email);
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).json({ success: true });
});

export { register, login, forgotPassword };
