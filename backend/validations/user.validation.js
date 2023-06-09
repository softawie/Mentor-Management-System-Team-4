import Joi from 'joi';

const updateProfile = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().optional(),
    bio: Joi.string().optional(),
    website: Joi.string().optional(),
    country: Joi.string().optional(),
    city: Joi.string().optional(),
    imageUrl: Joi.string().optional(),
    gitHub: Joi.string().optional(),
    instagram: Joi.string().optional(),
    linkedIn: Joi.string().optional(),
    twitter: Joi.string().optional(),
    technical_proficiency: Joi.string().optional(),
    previous_programs: Joi.string().optional(),
    availability_to_join: Joi.string().optional(),
    program_interest: Joi.string().optional(),
    mentor_before: Joi.boolean().optional(),
    years_of_experience: Joi.number().optional(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUserApprovalRequest = {
  params: Joi.object().keys({
    id: Joi.number().integer().required(),
  }),
};

const getUserById = {
  params: Joi.object().keys({
    id: Joi.number().integer(),
  }),
};
const getUsersByRole = {
  params: Joi.object().keys({
    role: Joi.string().required(),
  }),
};

export default {
  updateProfile,
  getUsers,
  getUserById,
  getUsersByRole,
  getUserApprovalRequest,
};
