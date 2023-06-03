import express from 'express';
import verifyToken from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import validator from '../../validations/program.validation';
import * as controller from '../../controllers/program.controller';

const router = express.Router();

router.route('/create').post(verifyToken, validate(validator.create), controller.create);
router
  .route('/:id')
  .get(verifyToken, validate(validator.findById), controller.findById)
  .put(verifyToken, validate(validator.update), controller.update)
  .delete(verifyToken, validate(validator.destroy), controller.destroy);
router.route('/users/:id').get(verifyToken, validate(validator.findAllByUserId), controller.findAllByUserId);
router
  .route('/:program_id/role/:user_role')
  .get(verifyToken, validate(validator.findAllAssignedUsersByRole), controller.findAllAssignedUsersByRole);
router.route('/').get(verifyToken, validate(validator.findAll), controller.findAll);

export default router;
