import express from 'express';
import validate from '../../middlewares/validate';
import notificationValidation from '../../validations/notification.validation';
import * as notificationController from '../../controllers/notification.controller';

const router = express.Router();

router
  .route('/')
  .get(notificationController.getNotifications)
  .post(validate(notificationValidation.createNotification), notificationController.createNotification);

router
  .route('/:notificationId')
  .get(notificationController.getNotification)
  .put(validate(notificationValidation.updateNotification), notificationController.updateNotification)
  .delete(notificationController.deleteNotification);

export default router;
