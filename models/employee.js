'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {

    static associate(models) {
      // define association here
      Employee.belongsTo(models.Business, {foreignKey: 'businessId'})
    }
  }
  Employee.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      businessId: {
        type: DataTypes.INTEGER,
        reference: {
          model: 'businesses',
          key: 'id'
        }
      },
    },
    {
      sequelize,
      modelName: 'Employee',
      tableName: 'employees'
    }
  )
  return Employee
}
