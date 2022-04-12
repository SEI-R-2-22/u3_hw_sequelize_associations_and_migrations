'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('employees', 'businessID', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'businesses',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('employees', 'businessId', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'businesses',
        key: 'id'
      }
    })
  }
};
