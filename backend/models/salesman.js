"use strict";
module.exports = (sequelize, DataTypes) => {
  const Salesman = sequelize.define(
    "Salesman",
    {
      salesman_firstname: DataTypes.STRING,
      salesman_lastname: DataTypes.STRING,
      salesman_username: DataTypes.STRING,
      salesman_password: DataTypes.STRING,
      salesman_email: DataTypes.STRING
    },
    {}
  );
  Salesman.associate = function(models) {
    //associations can be defined here
    Salesman.hasMany(models.Lead, {
      foreignKey: "salesman_id"
    });
    Salesman.belongsTo(models.Dealer, {
      foreignKey: "dealer_id"
    });
  };
  return Salesman;
};
