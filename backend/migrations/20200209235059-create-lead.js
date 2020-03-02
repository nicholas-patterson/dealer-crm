"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Leads", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lead_firstname: {
        type: Sequelize.STRING
      },
      lead_lastname: {
        type: Sequelize.STRING
      },
      lead_street: {
        type: Sequelize.STRING
      },
      lead_city: {
        type: Sequelize.STRING
      },
      lead_state: {
        type: Sequelize.STRING
      },
      lead_email: {
        type: Sequelize.STRING
      },
      lead_phone: {
        type: Sequelize.STRING
      },
      lead_type: {
        type: Sequelize.STRING
      },
      dealer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dealers",
          key: "id"
        }
      },
      salesman_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Salesmans",
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
    return queryInterface.dropTable("Leads");
  }
};
