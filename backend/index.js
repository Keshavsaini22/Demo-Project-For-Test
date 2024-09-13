const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { errorMiddleware } = require('./middleware');
const routes = require('./routes');

class Server {
    constructor() {
        this.app = express();
        dotenv.config();
        this.setUpMiddleware();
        this.setUpRoutes();
        this.setUpErrorHandlers();
        this.setupServer();
    }

    setUpMiddleware() {
        this.app.use(cookieParser());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors(
            {
                origin: 'http://localhost:3000',  // Allow requests from this origin
                credentials: true,  // Enable credentials (cookies, authorization headers, etc.)
                methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed methods
                allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
            }
        ));
        this.app.use('/uploads', express.static('uploads'))
    }

    setUpRoutes() {
        this.app.use('/', routes);
    }

    setUpErrorHandlers() {
        this.app.use((req, res, next) => {
            res.status(404).json({ error: "Route not found" });
        });
        this.app.use(errorMiddleware)
        // Handle uncaught exceptions
        process.on('uncaughtException', (err) => {
            console.log('Uncaught exception:', err);
        });
    }

    async setupServer() {
        const port = process.env.APP_PORT || 4000;
        this.app.listen(port, () => {
            console.log("Server running on port", port);
        });
    }
}

const server = new Server();