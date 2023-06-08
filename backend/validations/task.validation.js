import Joi from 'joi';

const create = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    details: Joi.string().required(),
    users: Joi.array().items(Joi.number()).required(),
  }),
};

const update = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object().keys({
    title: Joi.string().optional(),
    details: Joi.string().optional(),
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

const findAssignedUsersByTask = {
  params: Joi.object().keys({
    task_id: Joi.number().required(),
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

export default { create, update, destroy, findById, findAll, findAllByUserId, findAssignedUsersByTask };