/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'reset_password_code', {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('users', 'password_code_expire', {
      type: Sequelize.DataTypes.DATE,
      allowNull: true,
    });
    await queryInterface.addColumn('users', 'has_fill_profile', {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    });
    await queryInterface.addColumn('users', 'has_change_password', {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('users', 'reset_password_code');
    await queryInterface.removeColumn('users', 'password_code_expire');
    await queryInterface.removeColumn('users', 'has_fill_profile');
    await queryInterface.removeColumn('users', 'has_change_password');
  },
};
