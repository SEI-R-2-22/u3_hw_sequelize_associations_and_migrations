'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.business);
      models.business.hasMany(Address)
    }
  }
  Address.init(
    {
      id: { 
        type:DataTypes.STRING,
        primaryKey: true
      },
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      businessId: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Address',
      tableName: 'addresses',
    }
  )
  return Address
}
