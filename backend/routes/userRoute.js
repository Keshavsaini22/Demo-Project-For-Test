const express = require('express');
const { userController } = require('../controllers');

class UserRoutes{
    constructor() {
        this.router = express.Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get("/", userController.getUsers);
        this.router.put("/", userController.updateUser);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new UserRoutes().getRouter();