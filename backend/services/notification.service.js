import models from '../database/models';

const { Notification } = models;

/**
 * Create a notification
 * @param {Object} notificationBody
 * @returns {Promise<Notification>}
 */
const createNotification = async (notificationBody) => {
  const { message, userId } = notificationBody;

  const notification = await Notification.create({
    message,
    userId,
  });

  return notification;
};

/**
 * Get all notifications for a user
 * @param {string} userId
 * @returns {Promise<Notification[]>}
 */
const getNotificationsByUserId = async (userId) => {
  return Notification.findAll({
    where: {
      userId,
    },
    order: [['created_at', 'DESC']],
  });
};

export { createNotification, getNotificationsByUserId };
