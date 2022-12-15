'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable("carro", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }
      });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("carro");
  }
};
