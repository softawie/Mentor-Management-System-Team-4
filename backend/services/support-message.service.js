import models from '../database/models';

const { support_message } = models;

/**
 * Create a new notification
 * @param {object} messageBody - The notification object to be created
 * @returns {Promise<Notification>} - A promise that resolves to the newly created notification
 */
const createUserSupportMessage = async(messageBody) => {
    const supportMessage = await support_message.create(messageBody);
    return supportMessage;
}

/**
 * Get all notifications for a user
 * @param {number} id - The ID of the user to get support message for
 * @returns {Promise<Notification[]>} - A promise that resolves to an array of notifications
 */
const getUserSupportMessages = async(id) => {
    return support_message.findAll({
        where: { user_id : id },
    })
}

const getAllSupportMessages = async() => {
    return support_message.findAll();
}

export {
    createUserSupportMessage,
    getUserSupportMessages,
    getAllSupportMessages
};