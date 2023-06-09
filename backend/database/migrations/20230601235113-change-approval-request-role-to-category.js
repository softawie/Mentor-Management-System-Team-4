/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn('approval_requests', 'role', 'category');
  },

  async down(queryInterface) {
    await queryInterface.renameColumn('approval_requests', 'category', 'role');
  },
};
