'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
          allowNull: false,
      },
      matricId: {
        type: Sequelize.INTEGER,
          allowNull: false,
      },
      sex: {
        type: Sequelize.STRING,
          allowNull: false,
      },
      level: {
        type: Sequelize.STRING,
          allowNull: false,
      },
      department: {
        type: Sequelize.STRING,
          allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
          allowNull: false,
      },
      phone: {
        type: Sequelize.INTEGER,
          allowNull: false,
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
    return queryInterface.dropTable('Students');
  }
};
