import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import * as settingService from '../services/setting.service';

const getAllSettings = catchAsync(async (req, res) => {
  const settings = await settingService.getAllSettings();
  res.status(httpStatus.OK).json({ success: true, data: settings });
});

const updateSettingById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const setting = await settingService.getSettingById(id);
  if (!setting) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Setting not found');
  }

  const updatedSetting = await settingService.updateSetting(setting, body);
  res.status(httpStatus.OK).json({ success: true, data: updatedSetting });
});

export { getAllSettings, updateSettingById };
