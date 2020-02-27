"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Dealers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dealer_username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dealer_email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dealer_password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dealer_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dealer_street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dealer_city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dealer_state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dealer_country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dealer_zipcode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dealer_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Dealers");
  }
};
