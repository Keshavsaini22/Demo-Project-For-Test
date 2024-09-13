const express = require('express');
const { authController } = require('../controllers');
const uploadMiddleware = require('../middleware/uploadMiddleware');

class AuthRoutes {
    constructor() {
        this.router = express.Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.post("/register",uploadMiddleware, authController.register);
        this.router.post("/login", authController.login);
    }

    getRouter() {
        return this.router;
    }
}
const authRoutes = new AuthRoutes();
module.exports = authRoutes.getRouter();