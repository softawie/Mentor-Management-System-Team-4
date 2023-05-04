import httpStatus from 'http-status';
import passport from 'passport';
import catchAsync from '../utils/catchAsync';
import { authService } from '../services';
import config from '../config/config';
import { generateToken } from '../services/token.service';

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

const googleAuthLogin = passport.authenticate('google', { scope: ['email', 'profile'] });

const googleAuthCallback = passport.authenticate('google', {
  successRedirect: `${config.client_url}/success`,
  failureRedirect: '/failure',
});

const googleAuthSuccess = catchAsync(async (req, res) => {
  try {
    if (typeof req.user !== 'string') {
      const token = await generateToken({
        id: req.user._json.sub,
        email: req.user._json.email,
      });

      res.status(200).json({
        success: true,
        token,
        user: req.user._json,
      });
    } else {
      res.status(403).json({ success: false, message: 'Not authorized' });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

export { login, forgotPassword, resetPassword, googleAuthLogin, googleAuthCallback, googleAuthSuccess };