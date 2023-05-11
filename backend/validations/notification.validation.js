import Joi from 'joi';

const getNotifications = {
  query: Joi.object({
    limit: Joi.number().integer().min(1).max(100),
    page: Joi.number().integer().min(1),
  }),
};

export default {
  getNotifications,
};
