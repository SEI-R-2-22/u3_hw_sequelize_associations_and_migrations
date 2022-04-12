'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn
    ('addresses', 'address', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'businesses',
        key: 'id'
      }

    } )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn
    ('addresses', 'address')}
};
