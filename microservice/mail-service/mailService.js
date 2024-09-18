const ejs = require('ejs');
const nodemailer = require('nodemailer');
const transporterConfig = require('./mailConfig');
const path = require('path');
require("dotenv").config();

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport(transporterConfig);
    }

    async sendEmailGeneral(to, subject) {
        try {
            const template = await this.renderTemplate('addUser.ejs', { companyName: "Zenmonk",registrationLink:'https://www.google.com' });

            const mailOptions = {
                from: {
                    name: 'Team Zenmonk',
                    address: process.env.MAIL_USERNAME
                },
                to: [to],
                subject: subject,
                text: "User Added",
                html: template
            };

            await this.sendMail(mailOptions);
            console.log("Email sent successfully!");
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    renderTemplate(templateName, data) {
        return new Promise((resolve, reject) => {
            const templatePath = path.join(__dirname, '..', 'views', templateName);
            ejs.renderFile(templatePath, data, (err, template) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(template);
                }
            });
        });
    }

    async sendMail(mailOptions) {
        try {
            await this.transporter.verify();
            await this.transporter.sendMail(mailOptions);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MailService;
