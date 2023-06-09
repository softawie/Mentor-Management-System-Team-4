/* import Mailgun from 'mailgun.js';
import formData from 'form-data'; */
import nodemailer from 'nodemailer';
import config from '../config/config';

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */

/* const sendEmail = async (to, subject, text) => {
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({
    key: config.mailgun.apiKey,
    username: 'api',
  });
  const emailData = {
    from: config.mailgun.from,
    to,
    subject,
    text,
    // 'h:X-Mailgun-Variables': JSON.stringify(data.variables || {}),
  };
  await client.messages.create(config.mailgun.domain, emailData);
}; */

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport(config.gmail);
  await transporter.sendMail({
    to,
    subject,
    text,
  });
};
/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, passcode) => {
  await sendEmail(
    to,
    'MMS - Reset password',
    `
  Dear ${to},
  Your Reset Password code is : ${passcode}
  If you did not request any password resets, then ignore this email.
  `
  );
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token) => {
  const subject = 'Email Verification';
  const verificationEmailUrl = `${config.client_url}/verify?code=${token}`;
  const text = `Dear user,
To verify your email, click on this link: ${verificationEmailUrl}
If you did not create an account, then ignore this email.`;
  await sendEmail(to, subject, text);
};

export { sendEmail, sendResetPasswordEmail, sendVerificationEmail };
