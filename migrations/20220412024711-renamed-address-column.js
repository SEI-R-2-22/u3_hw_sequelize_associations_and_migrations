'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('addresses', 'businessID', 'businessId')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('addresses', 'businessId', 'businessID')
  }
}
