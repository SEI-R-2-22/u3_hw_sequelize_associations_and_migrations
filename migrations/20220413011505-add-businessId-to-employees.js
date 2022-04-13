'use strict';

const employee = require("../models/employee");

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.addColumn('employees', 'businessId', {
     type: Sequelize.INTEGER
   })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('employees', 'businessId')
  }
};
