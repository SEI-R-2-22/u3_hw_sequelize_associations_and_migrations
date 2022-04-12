"use strict";
const { Model } = require("sequelize");
const business = require("./business");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.Business, { foreignKey: "businessId" });
      // define association here
    }
  }
  Address.init(
    {
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      businessId: {
        type: DataTypes.INTEGER,
        onDelete: "Cascade",
        references: {
          model: "Address",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Address",
      tableName: "addresses",
    }
  );
  return Address;
};
