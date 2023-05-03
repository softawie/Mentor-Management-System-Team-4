import Joi from 'joi';
import { password } from './custom.validation';

export const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

export const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

export const changePassword = {
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
    currentPassword: Joi.string().required(),
  }),
};
