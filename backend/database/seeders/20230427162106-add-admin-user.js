/** @type {import('sequelize-cli').Migration} */
import models from '../models';
import utils from '../../utils/auth';

module.exports = {
  up: async (queryInterface) => {
    const { User, Credential } = models;
    const { hashPassword } = utils;

    const t = await queryInterface.sequelize.transaction();
    const password = await hashPassword('password');

    try {
      const user = await User.create(
        {
          firstName: 'John',
          lastName: 'Smith',
          email: 'jon.smith@gmail.com',
          user_role: 'admin',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          transaction: t,
        }
      );

      await Credential.create(
        {
          user_id: user.user_id,
          login_type: 'local',
          hashed_password: password,
        },
        {
          transaction: t,
        }
      );
      await t.commit();
    } catch (error) {
      await t.rollback();
    }
  },

  down: async () => {},
};
