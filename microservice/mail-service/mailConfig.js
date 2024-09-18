require('dotenv').config();

module.exports = {
  service: "hotmail",
  host: "smtp-mail.outlook.com",
  secureConnection: false,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  },
  tls: {
    ciphers: 'SSLv3'
  }
};
