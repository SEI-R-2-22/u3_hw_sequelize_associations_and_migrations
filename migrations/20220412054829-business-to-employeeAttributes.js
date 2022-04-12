'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return (queryInterface.createTable('businesses'))
    ('Business', {
      id: {String},
      name: {String},
      Sequelize: {
        modelName: 'Business',
      tableName: 'businesses'
      },
      businessId: {
        type: Sequelize.INTEGER
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return (queryInterface.dropTable('businesses'))
     ('Business', {
      id: {String},
      name: {String},
      Sequelize: {
        modelName: 'Business',
      tableName: 'businesses'
      },
      businessId: {
        type: Sequelize.INTEGER
      }
    });
  }
};
