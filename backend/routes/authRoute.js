const express = require('express');
const { authController } = require('../controllers');

class AuthRoutes {
    constructor() {
        this.router = express.Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.post("/register", authController.register);
        this.router.get("/login", authController.login);
    }

    getRouter() {
        return this.router;
    }
}
const authRoutes = new AuthRoutes();
module.exports = authRoutes.getRouter();