require('dotenv').config();
const { Sequelize } = require('sequelize');
if (!process.env.NODE_ENV) {
    console.log("NODE_ENV is not defined.");
    process.exit(128);
}

const config = require('./config')[process.env.NODE_ENV];

const sequelize = new Sequelize(config);
const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkConnection();

module.exports = {
  sequelize,
  checkConnection
};