'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('employees', 'businessId', {
      type: DataTypes.INTEGER,
      references: {
        model: 'employees',
        key: 'id'
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.reomveColumn('employees', 'businessId')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
