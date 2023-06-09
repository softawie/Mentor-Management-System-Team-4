import Joi from 'joi';

const createMessage = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    title: Joi.string().required(),
    email: Joi.array().items(Joi.string().email()).required(),
    body: Joi.string().required(),
  }),
};

const getUserMessage = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export default {
  createMessage,
  getUserMessage,
};
