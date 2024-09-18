const Pusher = require("pusher");
require('dotenv').config();

class PusherService {
    constructor() {
        this.pusher = new Pusher({
            appId: process.env.APPID,
            key: process.env.KEY,
            secret: process.env.SECRET,
            cluster: process.env.CLUSTER,
            useTLS: true,
        });
    }

    triggerEventdemo() {
        return this.pusher.trigger('demochannel', 'demoevent', "This is demo pusher message");
    }

    triggerEventLeaveApprove(channelName, eventName, { uuid, message }) {
        return this.pusher.trigger(`${channelName}_${uuid}`, eventName, { message });
    }

    triggerEventLeaveRequest(channelName, eventName, { uuid, message }) {
        return this.pusher.trigger(`${channelName}_${uuid}`, eventName, { message });
    }
}

module.exports = new PusherService();