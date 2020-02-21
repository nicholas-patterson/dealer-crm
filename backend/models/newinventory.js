"use strict";
module.exports = (sequelize, DataTypes) => {
  const NewInventory = sequelize.define(
    "NewInventory",
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
  NewInventory.associate = function(models) {
    // associations can be defined here
    NewInventory.belongsTo(models.Dealer, {
      foreignKey: "dealer_id",
      onDelete: "cascade"
    });

    NewInventory.belongsTo(models.Image, {
      foreignKey: "image_id",
      onDelete: "cascade"
    });
  };
  return NewInventory;
};
