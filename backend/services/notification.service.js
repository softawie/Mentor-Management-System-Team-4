import models from '../database/models';

const { Notification, User } = models;

/**
 * Create a new notification
 * @param {object} notificationBody - The notification object to be created
 * @returns {Promise<Notification>} - A promise that resolves to the newly created notification
 */
const createNotification = async (notificationBody) => {
  const notification = await Notification.create(notificationBody);
  return notification;
};

/**
 * Get all notifications for a user
 * @param {number} userId - The ID of the user to get notifications for
 * @param {number} limit - The maximum number of notifications to return
 * @param {number} page - The page number of notifications to return
 * @returns {Promise<Notification[]>} - A promise that resolves to an array of notifications
 */
const getNotificationsByUserId = async (userId, limit = 10, page = 1) => {
  const notifications = await Notification.findAndCountAll({
    where: { user_id: userId },
    include: [{ model: User, attributes: ['id', 'email'] }],
    order: [['created_at', 'DESC']],
    limit,
    offset: (page - 1) * limit,
  });
  return notifications;
};

/**
 * Get a notification by ID
 * @param {number} notificationId - The ID of the notification to get
 * @returns {Promise<Notification>} - A promise that resolves to the notification with the specified ID
 */
const getNotificationById = async (notificationId) => {
  const notification = await Notification.findByPk(notificationId, {
    include: [{ model: User, attributes: ['id', 'email'] }],
  });
  return notification;
};

/**
 * Update a notification by ID
 * @param {number} notificationId - The ID of the notification to update
 * @param {object} updateBody - The properties to update on the notification
 * @returns {Promise<Notification>} - A promise that resolves to the updated notification
 */
const updateNotificationById = async (notificationId, updateBody) => {
  const notification = await getNotificationById(notificationId);
  if (!notification) {
    throw new Error('Notification not found');
  }
  Object.assign(notification, updateBody);
  await notification.save();
  return notification;
};

/**
 * Delete a notification by ID
 * @param {number} notificationId - The ID of the notification to delete
 * @returns {Promise<Notification>} - A promise that resolves to the deleted notification
 */
const deleteNotificationById = async (notificationId) => {
  const notification = await getNotificationById(notificationId);
  if (!notification) {
    throw new Error('Notification not found');
  }
  await notification.destroy();
  return notification;
};

export default {
  createNotification,
  getNotificationsByUserId,
  getNotificationById,
  updateNotificationById,
  deleteNotificationById,
};
