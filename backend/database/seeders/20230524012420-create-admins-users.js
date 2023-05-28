/** @type {import('sequelize-cli').Migration} */
import models from '../models';
import utils from '../../utils/auth';
import users from '../users';

module.exports = {
  async up() {
    const { User, Credential, Setting } = models;

    const { hashPassword } = utils;

    const password = await hashPassword('password');

    const admins = await User.bulkCreate(users);
    const credentials = [];
    const settings = [];
    admins.forEach((user) => {
      credentials.push({
        user_id: user.user_id,
        login_type: 'local',
        hashed_password: password,
      });
      settings.push({
        user_id: user.user_id,
      });
    });
    await Credential.bulkCreate(credentials);
    await Setting.bulkCreate(settings);
  },

  down: async () => {},
};
