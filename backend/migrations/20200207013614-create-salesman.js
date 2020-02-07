"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Salesmans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      salesman_firstname: {
        type: Sequelize.STRING
      },
      salesman_lastname: {
        type: Sequelize.STRING
      },
      salesman_username: {
        type: Sequelize.STRING
      },
      salesman_password: {
        type: Sequelize.STRING
      },
      salesman_email: {
        type: Sequelize.STRING
      },
      leadId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Leads",
          key: "id"
        }
      },
      dealerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dealers",
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
    return queryInterface.dropTable("Salesmans");
  }
};
