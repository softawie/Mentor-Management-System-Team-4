import express from 'express';
import verifyToken from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import userValidation from '../../validations/user.validation';
import * as userController from '../../controllers/user.controller';

const router = express.Router();

router.route('/role/:role').get(verifyToken, validate(userValidation.getUsersByRole), userController.getUsersByRole);
router.route('/:id').get(verifyToken, validate(userValidation.getUserById), userController.getUserById);
router.route('/:id').put(verifyToken, validate(userValidation.updateProfile), userController.updateProfile);
router
  .route('/:id/approvals')
  .get(verifyToken, validate(userValidation.getUserApprovalRequest), userController.getUserApprovalRequests);
router.route('/').get(verifyToken, validate(userValidation.getUsers), userController.getUsers);

export default router;
