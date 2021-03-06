"use strict";
module.exports = (sequelize, DataTypes) => {
  const Dealer = sequelize.define(
    "Dealer",
    {
      dealer_username: DataTypes.STRING,
      dealer_email: DataTypes.STRING,
      dealer_password: DataTypes.STRING,
      dealer_name: DataTypes.STRING,
      dealer_street: DataTypes.STRING,
      dealer_city: DataTypes.STRING,
      dealer_state: DataTypes.STRING,
      dealer_country: DataTypes.STRING,
      dealer_zipcode: DataTypes.STRING,
      dealer_type: DataTypes.STRING
    },
    {}
  );
  Dealer.associate = function(models) {
    // associations can be defined here
    Dealer.hasMany(models.Lead, {
      foreignKey: "dealer_id"
    });

    Dealer.hasMany(models.Salesman, {
      foreignKey: "dealer_id"
    });

    Dealer.hasMany(models.Inventory, {
      foreignKey: "dealer_id"
    });

    Dealer.hasMany(models.NewInventory, {
      foreignKey: "dealer_id"
    });
  };
  return Dealer;
};
