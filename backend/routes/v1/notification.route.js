import express from 'express';
import verifyToken from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import notificationValidation from '../../validations/notification.validation';
import * as notificationController from '../../controllers/notification.controller';

const router = express.Router();

// Define your notification routes here
router
  .route('/')
  .get(verifyToken, validate(notificationValidation.getNotifications), notificationController.getNotifications);

router
  .route('/:notificationId')
  .get(verifyToken, validate(notificationValidation.getNotification), notificationController.getNotifications);

export default router;
