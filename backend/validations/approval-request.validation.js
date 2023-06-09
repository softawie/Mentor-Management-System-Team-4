import Joi from 'joi';

const createApprovalRequest = {
  body: Joi.object().keys({
    category: Joi.string().valid('mentor', 'mentor-manager', 'program').required(),
    email: Joi.string().email().required(),
    program_id: Joi.number().when('category', {
      is: Joi.valid('program'),
      then: Joi.required(),
    }),
  }),
};
const createProgramRequest = {
  body: Joi.object().keys({
    category: Joi.string().required(),
    email: Joi.string().email().required(),
    program_id: Joi.number().required(),
  }),
};
const updateApprovalRequest = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    status: Joi.string().required(),
  }),
};

const getApprovalRequest = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const findAllByCategory = {
  params: Joi.object().keys({
    category: Joi.string().required(),
  }),
};

const deleteApprovalRequest = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};
const getAllApprovalRequests = {
  query: Joi.object().keys({
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};
export default {
  updateApprovalRequest,
  getApprovalRequest,
  deleteApprovalRequest,
  createApprovalRequest,
  getAllApprovalRequests,
  findAllByCategory,
  createProgramRequest,
};
