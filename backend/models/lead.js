"use strict";
module.exports = (sequelize, DataTypes) => {
  const Lead = sequelize.define(
    "Lead",
    {
      lead_firstname: DataTypes.STRING,
      lead_lastname: DataTypes.STRING,
      lead_street: DataTypes.STRING,
      lead_city: DataTypes.STRING,
      lead_state: DataTypes.STRING,
      lead_email: DataTypes.STRING,
      lead_phone: DataTypes.STRING
    },
    {}
  );
  Lead.associate = function(models) {
    // associations can be defined here
  };
  return Lead;
};
