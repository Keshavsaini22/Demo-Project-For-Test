const { User, Sequelize } = require("../models");
const BaseRepository = require("./baseRepository");

class UserRepository extends BaseRepository {
    constructor({ model }) { super({ model }); }

    async getUsers({ user, query }) {
        const { limit, page, role, search } = query;
        const order_column = 'updated_at'
        const order = [[order_column, 'DESC']];
        const offset = limit * (page - 1);

        let whereObj = {};
        if (role) whereObj.role = role;
        if (search) {
            whereObj[Sequelize.Op.or] = [
                { first_name: { [Sequelize.Op.iLike]: `%${search}%` } },
                { last_name: { [Sequelize.Op.iLike]: `%${search}%` } }
            ];
        }

        const data = await this.findAndCountAll({ criteria: whereObj, order, offset, limit });
        return data;
    }

}

module.exports = new UserRepository({ model: User })