'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('employees','businessId',{
      type: Sequelize.INTEGER,
      references: {
        model: 'businesses',
        key: 'id'
      }
     })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('employees','businessId',{
      type: Sequelize.INTEGER,
      references: {
        model: 'businesses',
        key: 'id'
      }
     })
  }
};
