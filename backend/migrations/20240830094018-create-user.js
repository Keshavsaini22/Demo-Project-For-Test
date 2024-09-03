'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
      first_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      role: {
        type: Sequelize.ENUM('admin', 'user'),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          is: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        }
      },
      // company_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'company_details',
      //     key: 'id',
      //   },
      // },
      date_of_birth: {
        type: Sequelize.DATE,
      },
      phone: {
        type: Sequelize.STRING(10),
      },
      pincode: {
        type: Sequelize.STRING(6),
      },
      country: {
        type: Sequelize.STRING(100),
      },
      state: {
        type: Sequelize.STRING(100),
      },
      city: {
        type: Sequelize.STRING(100),
      },
      street: {
        type: Sequelize.STRING(100),
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
    await queryInterface.addIndex('users', ['uuid', 'email', 'username']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};