'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('employees', 'businessID', 'businessId')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('employees', 'businessId', 'businessID')
  }
};
