import express from 'express';
import validate from '../../middlewares/validate';
import verifyToken from '../../middlewares/auth';
import * as authValidation from '../../validations/auth.validation';
import * as authController from '../../controllers/auth.controller';

const router = express.Router();

const { createUser, login, forgotPassword, resetPassword, changePassword } = authController;

router.post('/user/create', verifyToken, validate(authValidation.createUser), createUser);
router.post('/login', validate(authValidation.login), login);
router.post('/forgot', validate(authValidation.forgotPassword), forgotPassword);
router.post('/reset', validate(authValidation.resetPassword), resetPassword);
router.put('/password/change', verifyToken, validate(authValidation.changePassword), changePassword);

export default router;
