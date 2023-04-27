import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { notificationService } from '../services';

const getNotifications = catchAsync(async (req, res) => {
  const { limit = 10, page = 1 } = req.query;
  const result = await notificationService.queryNotifications(limit, page);

  res.status(httpStatus.OK).json({ success: true, data: result });
});

const markAllNotificationsAsRead = catchAsync(async (req, res) => {
  await notificationService.markAllNotificationsAsRead(req.user.email);

  res.status(httpStatus.OK).json({ success: true, message: 'All notifications have been marked as read' });
});

export { getNotifications, markAllNotificationsAsRead };
