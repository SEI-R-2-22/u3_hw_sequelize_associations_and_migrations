'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('employees', 'businessId', {
      type: DataTypes.INTEGER,
      references: {
        model: 'employees',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('employees', 'businessId')
  }
};
