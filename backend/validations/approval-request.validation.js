import Joi from 'joi';

const createApprovalRequest = {
  body: Joi.object().keys({
    role: Joi.string().required(),
    email: Joi.string().email().required(),
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

const deleteApprovalRequest = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export default {
  updateApprovalRequest,
  getApprovalRequest,
  deleteApprovalRequest,
  createApprovalRequest,
};
