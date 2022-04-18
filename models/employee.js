'use strict'
const { Model, Sequelize } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.belongsTo(models.Business, { foreignKey: 'businessId', as: "employee" })
    }
  }
  Employee.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      businessId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'businesses',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Employee',
      tableName: 'employees'
    }
  )
  return Employee
}
