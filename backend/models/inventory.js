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
      dealer_id: DataTypes.INTEGER,
      image_id: DataTypes.INTEGER
    },
    {}
  );
  Inventory.associate = function(models) {
    // associations can be defined here
    // Inventory.belongsToMany(models.Image, {
    //   as: "images",
    //   through: models.InventoryImage,
    //   foreignKey: "inventory_id",
    //   otherKey: "image_id"
    // });
    Inventory.belongsTo(models.Dealer, {
      foreignKey: "dealer_id"
    });

    Inventory.belongsTo(models.Image, {
      foreignKey: "image_id"
    });
  };
  return Inventory;
};
