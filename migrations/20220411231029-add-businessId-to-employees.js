'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('employees', 'businessId', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'businesses',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('employees', 'businessId')
  }
}
