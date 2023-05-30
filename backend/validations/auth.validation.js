import Joi from 'joi';
import { password } from './custom.validation';

export const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    user_role: Joi.string().required(),
  }),
};

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
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
    passcode: Joi.string().required(),
  }),
};

export const changePassword = {
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
    currentPassword: Joi.string().required(),
  }),
};
