/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.renameColumn(
      {
        tableName: 'users',
      },
      'user_type',
      'user_role'
    );
  },

  down: async () => {},
};
