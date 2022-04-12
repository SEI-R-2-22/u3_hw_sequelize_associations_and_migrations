'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('addresses', 'businessId', {
      type: Sequelize.INTEGER
    })
   },
   down: (queryInterface, Sequelize) => {
     return queryInterface.changeColumn('addresses', 'businessId', {
       type: Sequelize.INTEGER
     })
   }
 };
