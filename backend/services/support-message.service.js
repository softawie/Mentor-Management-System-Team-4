import models from '../database/models';

const { supportMessage } = models;

/**
 * Create a new notification
 * @param {object} messageBody - The notification object to be created
 * @returns {Promise<Notification>} - A promise that resolves to the newly created notification
 */
const createUserSupportMessage = async (messageBody) => {
  const newSupportMessage = await supportMessage.create(messageBody);
  return newSupportMessage;
};

/**
 * Get all notifications for a user
 * @param {number} id - The ID of the user to get support message for
 * @returns {Promise<Notification[]>} - A promise that resolves to an array of notifications
 */
const getUserSupportMessages = async (id) => {
  return supportMessage.findAll({
    where: { user_id: id },
  });
};

const getAllSupportMessages = async () => {
  return supportMessage.findAll();
};

export { createUserSupportMessage, getUserSupportMessages, getAllSupportMessages };
