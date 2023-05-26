import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import * as supportMessageService from '../services/support-message.service';

const createSupportMessage = catchAsync(async (req, res) => {
  const SupportMessage = await supportMessageService(req.body);
  res.status(httpStatus.CREATED).json({ success: true, data: SupportMessage });
});

const getAllSupportMessage = catchAsync(async (req, res) => {
  const suportMessage = await supportMessageService.getAllSupportMessages();

  if (!suportMessage) {
    res.status(httpStatus.NOT_FOUND).json({ success: false, message: 'Support Messages not found' });
  } else {
    res.status(httpStatus.OK).json({ success: true, data: suportMessage });
  }
});

const userSupportMessage = catchAsync(async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'userId query parameter is required' });
  }

  const UserSupportMessage = await supportMessageService.getUserSupportMessages(id);
  if (!UserSupportMessage) {
    res.status(httpStatus.NOT_FOUND).json({ success: false, message: 'Support Messages not found for this user' });
  } else {
    res.status(httpStatus.OK).json({ success: true, data: UserSupportMessage });
  }
});

export { createSupportMessage, userSupportMessage, getAllSupportMessage };
