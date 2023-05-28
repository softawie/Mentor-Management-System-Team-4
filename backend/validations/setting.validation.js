import Joi from 'joi';

const updateSettingSchema = Joi.object({
  show_linkedin: Joi.boolean(),
  show_twitter: Joi.boolean(),
  show_instagram: Joi.boolean(),
  show_github: Joi.boolean(),
  show_contact_info: Joi.boolean(),
  email_program_notification: Joi.boolean(),
  email_task_notification: Joi.boolean(),
  email_approval_notification: Joi.boolean(),
  email_report_notification: Joi.boolean(),
  email_post_notification: Joi.boolean(),
  email_comment_notification: Joi.boolean(),
  email_comment_on_my_post_notification: Joi.boolean(),
  email_mention_notification: Joi.boolean(),
  email_direct_message_notification: Joi.boolean(),
  in_app_program_notification: Joi.boolean(),
  in_app_task_notification: Joi.boolean(),
  in_app_approval_notification: Joi.boolean(),
  in_app_report_notification: Joi.boolean(),
  in_app_post_notification: Joi.boolean(),
  in_app_comment_notification: Joi.boolean(),
  in_app_comment_on_my_post_notification: Joi.boolean(),
  in_app_mention_notification: Joi.boolean(),
  in_app_direct_message_notification: Joi.boolean(),
}).min(1);

export default { updateSettingSchema };
