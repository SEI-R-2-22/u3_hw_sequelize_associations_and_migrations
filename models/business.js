'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {

    static associate(models) {
      // define association here
      Business.hasMany(models.Employee, {foreignKey: 'businessId'});
      Business.hasOne(models.Address, {foreignKey: 'businessId'});
    }
  }
  Business.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Business',
      tableName: 'businesses'
    }
  )
  return Business
}
