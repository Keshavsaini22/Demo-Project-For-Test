const RedisConfigure = require('./redisConfigure');

class Publisher {
    constructor() {
        this.redisConfig = new RedisConfigure();
        this.client = this.redisConfig.getClient();
    }

    async publish(channel, message) {
        try {
            await this.redisConfig.connect();
            await this.client.publish(channel, JSON.stringify(message));
            console.log(`Message published to channel ${channel}`);
        } catch (error) {
            console.error('Failed to publish message', error);
        }
    }
}

const publisher = new Publisher();
module.exports = publisher;
