'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {

    static associate(models) {
      // define association here
      Address.belongsTo(models.Business, {foreignKey: 'businessId'})

    }
  }
  Address.init(
    {
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      businessId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'businesses',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Address',
      tableName: 'addresses'
    }
  )
  return Address
}
