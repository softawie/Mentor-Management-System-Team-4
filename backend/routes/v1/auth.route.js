import express from 'express';
import validate from '../../middlewares/validate';
import verifyToken from '../../middlewares/auth';
import * as authValidation from '../../validations/auth.validation';
import * as authController from '../../controllers/auth.controller';

const router = express.Router();

const { login, forgotPassword, resetPassword, googleAuthLogin, googleAuthCallback, googleAuthSuccess } = authController;

router.get('/success', googleAuthSuccess);
router.get('/failed', (_req, res) => {
  res.status(401).json({ success: false, message: 'login failed' });
});
router.get('/google/callback', googleAuthCallback);
router.get('/google', googleAuthLogin);
router.post('/login', validate(authValidation.login), login);
router.post('/forgot', validate(authValidation.forgotPassword), forgotPassword);
router.post('/reset', validate(authValidation.resetPassword), resetPassword);
router.put('/password/change', verifyToken, validate(authValidation.changePassword), changePassword);

export default router;
