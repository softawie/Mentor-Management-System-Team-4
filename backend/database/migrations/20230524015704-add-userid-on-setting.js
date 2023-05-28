/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('settings', 'user_id', {
      type: Sequelize.DataTypes.BIGINT,
    });
  },
  async down(queryInterface) {
    queryInterface.removeColumn('settings', 'user_id');
  },
};
