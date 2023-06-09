/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn('tasks', 'mentor_id');
    await queryInterface.removeColumn('tasks', 'mentor_manager_id');
  },

  async down(queryInterface) {
    await queryInterface.addColumn('tasks', 'mentor_id');
    await queryInterface.addColumn('tasks', 'mentor_manager_id');
  },
};
