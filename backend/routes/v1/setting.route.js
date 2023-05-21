import express from 'express';
import validate from '../../middlewares/validate';
import updateSettingSchema from '../../validations/setting.validation';
import * as settingController from '../../controllers/setting.controller';

const router = express.Router();

router.get('/', settingController.getAllSettings);
router.put('/:id', validate(updateSettingSchema), settingController.updateSettingById);

export default router;
