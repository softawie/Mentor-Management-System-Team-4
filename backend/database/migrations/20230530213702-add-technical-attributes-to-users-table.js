/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'technical_proficiency', {
      type: Sequelize.DataTypes.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn('users', 'previous_programs', {
      type: Sequelize.DataTypes.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn('users', 'availability_to_join', {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('users', 'program_interest', {
      type: Sequelize.DataTypes.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn('users', 'mentor_before', {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    });
    await queryInterface.addColumn('users', 'years_of_experience', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('users', 'technical_proficiency');
    await queryInterface.removeColumn('users', 'previous_programs');
    await queryInterface.removeColumn('users', 'availability_to_join');
    await queryInterface.removeColumn('users', 'program_interest');
    await queryInterface.removeColumn('users', 'mentor_before');
    await queryInterface.removeColumn('users', 'years_of_experience');
  },
};
