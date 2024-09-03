const express = require('express');

class RecordRoutes{
    constructor() {
        this.router = express.Router();
        this.setupRoutes();
    }

    setupRoutes() {
        // this.router.put("/register", userController.register);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new RecordRoutes().getRouter();