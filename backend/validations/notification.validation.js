import Joi from 'joi';

const createNotification = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    message: Joi.string().required(),
    recipients: Joi.array().items(Joi.string().email()).required(),
    type: Joi.string().valid('info', 'warning', 'error').required(),
  }),
};

const updateNotification = {
  params: Joi.object().keys({
    notificationId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    title: Joi.string().required(),
    message: Joi.string().required(),
    recipients: Joi.array().items(Joi.string().email()).required(),
    type: Joi.string().valid('info', 'warning', 'error').required(),
  }),
};

const getNotifications = {
  query: Joi.object().keys({
    page: Joi.number().integer().min(1),
    limit: Joi.number().integer().min(1).max(100),
  }),
};

const getNotification = {
  params: Joi.object().keys({
    notificationId: Joi.string().required(),
  }),
};

const deleteNotification = {
  params: Joi.object().keys({
    notificationId: Joi.string().required(),
  }),
};

export default {
  createNotification,
  updateNotification,
  getNotifications,
  getNotification,
  deleteNotification,
};
