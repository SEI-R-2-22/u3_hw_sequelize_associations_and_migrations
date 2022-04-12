'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return 
    queryInterface.addColumn('addresses', 'businessId'
    , {
      type: Sequelize.INTEGER
    })
   
  },

  async down (queryInterface, Sequelize) {
  return queryInterface.removeColumn('addresses', 'businessId')
  }
};
