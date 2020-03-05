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
      lead_phone: DataTypes.STRING,
      lead_type: DataTypes.STRING,
      salesman_lead: DataTypes.BOOLEAN,
      salesman_id: DataTypes.INTEGER,
      dealer_id: DataTypes.INTEGER
    },
    {}
  );
  Lead.associate = function(models) {
    // associations can be defined here
    Lead.belongsTo(models.Dealer, {
      foreignKey: "dealer_id"
    });
  };
  return Lead;
};
