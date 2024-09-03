'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('records', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        allowNull: false,
      },
      jsonb: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active',
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      },
    });
    await queryInterface.addIndex('records', ['uuid', 'status']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('records');
  }
};