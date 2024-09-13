const { OK, CREATED } = require("../libs/constants")
const { authService } = require("../services")

class AuthController {
    static async register(req, res, next) {
        try {
            const response = await authService.register({ body: req.body,files:req.files })
            return res.status(CREATED).send(response)
        }
        catch (err) {
            console.error("Error while registering user", err)
            return next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const response = await authService.login({ body: req.body })
            res.cookie('jwt', response.token, { httpOnly: true, secure: true, sameSite: 'none' });
            return res.status(OK).send(response)
        }
        catch (err) {
            console.error("Error while login user", err)
            return next(err)
        }
    }
}

module.exports = AuthController