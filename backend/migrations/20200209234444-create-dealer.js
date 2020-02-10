'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dealers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dealer_username: {
        type: Sequelize.STRING
      },
      dealer_email: {
        type: Sequelize.STRING
      },
      dealer_password: {
        type: Sequelize.STRING
      },
      dealer_name: {
        type: Sequelize.STRING
      },
      dealer_street: {
        type: Sequelize.STRING
      },
      dealer_city: {
        type: Sequelize.STRING
      },
      dealer_state: {
        type: Sequelize.STRING
      },
      dealer_country: {
        type: Sequelize.STRING
      },
      dealer_zipcode: {
        type: Sequelize.STRING
      },
      dealer_type: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Dealers');
  }
};