'use strict';
module.exports = (sequelize, DataTypes) => {
  const DealerNotification = sequelize.define('DealerNotification', {
    title: DataTypes.STRING,
    data: DataTypes.JSON,
    dealer_id: DataTypes.INTEGER
  }, {});
  DealerNotification.associate = function(models) {
    // associations can be defined here
  };
  return DealerNotification;
};