"use strict";
module.exports = (sequelize, DataTypes) => {
  const InventoryImage = sequelize.define(
    "InventoryImage",
    {
      image_id: DataTypes.INTEGER,
      inventory_id: DataTypes.INTEGER
    },
    {}
  );
  InventoryImage.associate = function(models) {
    // associations can be defined here
  };
  return InventoryImage;
};
