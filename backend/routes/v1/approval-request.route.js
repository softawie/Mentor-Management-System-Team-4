import express from 'express';
import verifyToken from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import approvalValidation from '../../validations/approval-request.validation';
import * as approvalRequest from '../../controllers/approval-request.controller';

const router = express.Router();

router
  .route('/create')
  .post(verifyToken, validate(approvalValidation.createApprovalRequest), approvalRequest.createApprovalRequest);
router
  .route('/:id')
  .get(verifyToken, validate(approvalValidation.getApprovalRequest), approvalRequest.getApprovalRequestById);
router
  .route('/:id')
  .put(verifyToken, validate(approvalValidation.updateApprovalRequest), approvalRequest.updateApprovalRequest);
router.route('/').get(verifyToken, validate(approvalValidation.getAllApprovalRequests), approvalRequest.getApprovalRequests);
router
  .route('/category/:category')
  .get(verifyToken, validate(approvalValidation.findAllByCategory), approvalRequest.findAllByCategory);
export default router;
