'use strict';

const { QueryTypes } = require("sequelize/types");

module.exports = {
   up (queryInterface, Sequelize) {
    return queryInterface.addColumn('addresses', 'businessId',
     {type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'businesses',
        key: 'id'
      }})
  },

   down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('addresses', 'businessId')
  }
};

