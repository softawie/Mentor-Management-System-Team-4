import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { notificationService } from '../services';

export const createNotification = catchAsync(async (req, res) => {
  const notification = await notificationService.createNotification(req.body);
  res.status(httpStatus.CREATED).json({ success: true, data: notification });
});

export const getNotifications = catchAsync(async (req, res) => {
  const { limit = 10, page = 1, userId } = req.query;
  if (!userId) {
    return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'userId query parameter is required' });
  }
  const notifications = await notificationService.getNotificationsByUserId(userId, limit, page);
  res.status(httpStatus.OK).json({ success: true, data: notifications });
});

export const getNotification = catchAsync(async (req, res) => {
  const notification = await notificationService.getNotificationById(req.params.notificationId);
  if (!notification) {
    res.status(httpStatus.NOT_FOUND).json({ success: false, message: 'Notification not found' });
  } else {
    res.status(httpStatus.OK).json({ success: true, data: notification });
  }
});

export const updateNotification = catchAsync(async (req, res) => {
  const updatedNotification = await notificationService.updateNotification(req.params.notificationId, req.body);
  if (!updatedNotification) {
    res.status(httpStatus.NOT_FOUND).json({ success: false, message: 'Notification not found' });
  } else {
    res.status(httpStatus.OK).json({ success: true, data: updatedNotification });
  }
});

export const deleteNotification = catchAsync(async (req, res) => {
  const isDeleted = await notificationService.deleteNotification(req.params.notificationId);
  if (!isDeleted) {
    res.status(httpStatus.NOT_FOUND).json({ success: false, message: 'Notification not found' });
  } else {
    res.status(httpStatus.OK).json({ success: true, message: 'Notification deleted successfully' });
  }
});

// export { createNotification, getNotifications, getNotification, updateNotification, deleteNotification };
