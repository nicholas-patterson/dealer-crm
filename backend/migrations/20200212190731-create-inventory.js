"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Inventories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.STRING
      },
      make: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      miles: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
      },
      dealer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dealers",
          key: "id"
        }
      },
      image_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Images",
          key: "id"
        }
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
    return queryInterface.dropTable("Inventories");
  }
};
