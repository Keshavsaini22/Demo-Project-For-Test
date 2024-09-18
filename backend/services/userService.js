const { error } = require('../libs')
const { userRepository } = require('../repositories')
const pusherService = require("../pusher/publishEvent");

class UserService {

    static async getUsers(payload) {
        const currentUser = payload.body.user
        let { limit, page, role, search } = payload.query
        limit = Number(payload?.query?.limit) || 10;
        page = Number(payload?.query?.page) || 1;
        const output = await userRepository.getUsers({ user: currentUser, query: { limit, page, role, search } });
        return output;
    }

    static async updateUser(payload) {
        const { user, email, password, username } = payload.body
        if (email) throw new error.badRequest('Email cannot be updated')
        if (password) throw new error.badRequest('Password cannot be updated')
        if (username) throw new error.badRequest('Username cannot be updated')

        const output = await userRepository.update({ payload: payload.body, criteria: { id: user.id } });
        if (output[0] === 0) throw new error.badRequest('User not found');
        await pusherService.triggerEventdemo()
        return await userRepository.findOne({ uuid: user.uuid });
    }

}

module.exports = UserService