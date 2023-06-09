import express from 'express';
import validate from '../../middlewares/validate';
import verifyToken from '../../middlewares/auth';
import * as authValidation from '../../validations/auth.validation';
import * as authController from '../../controllers/auth.controller';

const router = express.Router();

const { register, login, forgotPassword, resetPassword, changePassword } = authController;

router.post('/register', validate(authValidation.register), register);
router.post('/login', validate(authValidation.login), login);
router.post('/forgot', validate(authValidation.forgotPassword), forgotPassword);
router.post('/reset', validate(authValidation.resetPassword), resetPassword);
router.put('/password/change', verifyToken, validate(authValidation.changePassword), changePassword);

export default router;
