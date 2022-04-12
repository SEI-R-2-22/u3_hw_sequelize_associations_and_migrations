'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn
    ("addresses", "address", {
      type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'businesses',
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
    return queryInterface.removeColumn("addresses", "address")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
