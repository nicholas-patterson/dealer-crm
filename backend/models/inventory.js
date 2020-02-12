"use strict";
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define(
    "Inventory",
    {
      year: DataTypes.STRING,
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      price: DataTypes.STRING,
      miles: DataTypes.STRING,
      info: DataTypes.STRING,
      image_id: DataTypes.INTEGER
    },
    {}
  );
  Inventory.associate = function(models) {
    // associations can be defined here
    Inventory.hasMany(models.Image, {
      foreignKey: "image_id"
    });
  };
  return Inventory;
};
