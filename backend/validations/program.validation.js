import Joi from 'joi';

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    avatar_url: Joi.string().optional(),
    users: Joi.array().items(Joi.number()).required(),
  }),
};

const update = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    avatar_url: Joi.string().optional(),
    users: Joi.array().items(Joi.number()).optional(),
  }),
};

const findById = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

const findAllByUserId = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

const findAllAssignedUsersByRole = {
  params: Joi.object().keys({
    program_id: Joi.number().required(),
    user_role: Joi.string().valid('admin', 'mentor', 'mentor-manager').required(),
  }),
};

const destroy = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

const findAll = {
  body: Joi.object().keys({
    limit: Joi.number().optional(),
    page: Joi.number().optional(),
  }),
};

export default { create, update, destroy, findById, findAll, findAllByUserId, findAllAssignedUsersByRole };
