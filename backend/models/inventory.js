"use strict";
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define(
    "Inventory",
    {
      car_picture: DataTypes.STRING,
      year: DataTypes.STRING,
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      price: DataTypes.STRING,
      miles: DataTypes.STRING,
      info: DataTypes.STRING,
      dealer_id: DataTypes.INTEGER,
      image_id: DataTypes.INTEGER
    },
    {}
  );
  Inventory.associate = function(models) {
    //associations can be defined here
    Inventory.belongsTo(models.Dealer, {
      foreignKey: "dealer_id"
    });

    Inventory.belongsTo(models.Image, {
      foreignKey: "image_id"
    });
  };
  return Inventory;
};
