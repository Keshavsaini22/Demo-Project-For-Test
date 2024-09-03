require('dotenv').config();

module.exports = {
  "local": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    "seederStorage": "sequelize",
    define: {
      underscored: true, // Enable snake_case naming for tables and columns
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at'
    },
  },
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    "seederStorage": "sequelize",
    define: {
      underscored: true, // Enable snake_case naming for tables and columns
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at'
    },
  },
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    "seederStorage": "sequelize",
    define: {
      underscored: true, // Enable snake_case naming for tables and columns
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at'
    },
  }
}