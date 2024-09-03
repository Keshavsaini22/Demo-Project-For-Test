const { OK } = require("../libs/constants");
const { userService } = require("../services");

class UserController {

    static async getUsers(req, res, next) {
        try {
            const response = await userService.getUsers({ body: req.body, query: req.query })
            return res.status(OK).send(response)
        } catch (error) {
            console.log("Error while getting users", error);
            return next(error);
        }
    }

    static async updateUser(req, res, next) {
        try {
            const response = await userService.updateUser({ body: req.body })
            return res.status(OK).send(response)
        } catch (error) {
            console.log("Error while updating user", error);
            return next(error);
        }
    }

}

module.exports = UserController