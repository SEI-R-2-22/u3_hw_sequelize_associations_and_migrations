module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('addresses','businessId',{
      type:Sequelize.STRING
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('addresses', 'businessId');
  }
};