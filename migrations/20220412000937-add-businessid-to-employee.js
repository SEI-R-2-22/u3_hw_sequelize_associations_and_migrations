module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('employees','businessId',{
      type:Sequelize.STRING
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('employees', 'businessId');
  }
};