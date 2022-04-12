'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('employees', 'businessID', 'businessId')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('employees', 'businessId', 'businessID')
  }
}
