const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middleware/authMiddleware.js');

const authRoutes = require('./authRoute');
const userRoute = require('./userRoute');
const recordRoute = require('./recordRoute');

router.get("/", (req, res) => {
    res.send("welcome");
});

// router.use("/users", authenticateJWT, userRoute);
router.use("/auth", authRoutes);
router.use("/users", authenticateJWT, userRoute);
router.use("/records", authenticateJWT, recordRoute);


module.exports = router