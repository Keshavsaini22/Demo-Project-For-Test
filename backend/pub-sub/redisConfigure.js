const { createClient } = require('redis');

class RedisConfigure {
    constructor() {
        this.client = createClient({ url: `${process.env.REDIS_PROTOCOL}://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}` });
        this.client.on('error', (err) => console.log('Redis Client Error', err));
    }

    async connect() {
        try {
            await this.client.connect();
            console.log("Connected to Redis");
        } catch (error) {
            console.error("Failed to connect to Redis", error);
        }
    }

    getClient() {
        return this.client;
    }
}

module.exports = RedisConfigure;
