import express from 'express';
import validate from '../../middlewares/validate';
import SupportMessageValidation from '../../validations/support-message.validations';
import * as SupportMessageController from '../../controllers/support-message.controller';

const router = express.Router();

router
  .route('/')
  .get(SupportMessageController.getAllSupportMessage)
  .post(validate(SupportMessageValidation.createMessage), SupportMessageController.createSupportMessage);

router.route('/:id').get(validate(SupportMessageValidation.getUserMessage), SupportMessageController.userSupportMessage);
