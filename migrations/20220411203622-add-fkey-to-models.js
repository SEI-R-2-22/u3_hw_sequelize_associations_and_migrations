'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn (
      'addresses',
      'businessId',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }
      
      
    
    )

    await queryInterface.addColumn( 
      'employees',
      'businessId',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }

    )

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn ('addresses', 'businessId')
    await queryInterface.removeColumn ('employees', 'businessId')
  }
};
