"use strict";
module.exports = (sequelize, DataTypes) => {
  const SalesmanNotification = sequelize.define(
    "SalesmanNotification",
    {
      title: DataTypes.STRING,
      data: DataTypes.JSON,
      salesmans_id: DataTypes.INTEGER
    },
    {}
  );
  SalesmanNotification.associate = function(models) {
    // associations can be defined here
  };
  return SalesmanNotification;
};
