const { error } = require("../libs");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authRepository } = require("../repositories");

class AuthService {

    static async register(payload) {
        const { username, email, password } = payload.body;
        if (!email) throw new error.badRequest('Email is required');
        if (!username) throw new error.badRequest('Username is required');
        if (!password) throw new error.badRequest('Password is required');

        let user = await authRepository.findOne({ email });
        if (user) throw new error.badRequest('User already exists');
        const hashedPassword = await bcrypt.hash(password, 10);
        await authRepository.create({ ...payload.body, username, email, password: hashedPassword, });
        return "User registered successfully"
    }

    static async login(payload) {
        const { identifier, password } = payload.body;
        if (!identifier) throw new error.badRequest('Email or username is required');
        if (!password) throw new error.badRequest('Password is required');

        let whereobj = {};
        // Regular expression to match email pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(identifier)) {
            whereobj.email = identifier;
        }
        else {
            whereobj.username = identifier;
        }

        let user = await authRepository.findOne(whereobj);
        if (!user) throw new error.badRequest('Invalid credentials');
        user = user.toJSON();
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new error.badRequest('Invalid credentials');
        delete user.password;
        const token = jwt.sign(user, process.env.JWT_SECRET);
        return { user, token };
    }

}

module.exports = AuthService