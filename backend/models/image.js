"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      car_picture: DataTypes.STRING,
      cloudinary_pic_id: DataTypes.STRING,
      dealer_id: DataTypes.INTEGER
    },
    {}
  );
  Image.associate = function(models) {
    // associations can be defined here
    Image.hasMany(models.Inventory, {
      foreignKey: "image_id"
    });

    Image.hasMany(models.NewInventory, {
      foreignKey: "image_id"
    });

    // Image.belongsToMany(models.Inventory, {
    //   through: models.InventoryImage,
    //   foreignKey: "image_id",
    //   otherKey: "inventory_id"
    // });
  };
  return Image;
};
