const app = require('express')();
const { createClient } = require('redis');
const MailService = require('./mail-service/mailService');
require("dotenv").config();

class RedisSubscriberService {
    constructor() {
        this.client = createClient({
            url: `${process.env.REDIS_PROTOCOL}://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
        });
        this.client.on('error', (err) => console.log('Redis Client Error', err));
        this.mailService = new MailService();
    }

    async connect() {
        try {
            await this.client.connect();
            console.log('Connected to Redis');
        } catch (error) {
            console.error('Failed to connect to Redis', error);
        }
    }

    async subscribe(channel, callback) {
        try {
            await this.client.subscribe(channel, callback);
        } catch (error) {
            console.error('Failed to subscribe to channel', error);
        }
    }

    async sendMail(payload) {
        try {
            this.mailService.sendEmailGeneral(payload.email, 'Welcome to the team!');
        } catch (error) {
            console.error('Failed to send email', error);
        }
    }
}

app.listen(process.env.APP_PORT, () => {
    (async () => {
        const redisSubscriberService = new RedisSubscriberService();
        await redisSubscriberService.connect();

        redisSubscriberService.subscribe('user', (message) => {
            const data = JSON.parse(message);
            console.log('data: ', data);
            if (data.event === 'send-mail') redisSubscriberService.sendMail({ email: data.email });
        });
    })();
    console.log(`Server running on port ${process.env.APP_PORT}`)
});