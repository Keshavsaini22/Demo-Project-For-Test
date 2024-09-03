const JWT = require("jsonwebtoken");
const { INTERNAL_SERVER_ERROR, FORBIDDEN } = require("../libs/constants");

//protected route

exports.authenticateJWT = async (req, res, next) => {
  try {
    const token = req.headers.authorization || req?.cookies?.jwt;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - Token not provided' });
    }
    JWT.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(FORBIDDEN).json({ error: 'Forbidden - Invalid token' });
      }
      req.body.user = { ...user };
      next();
    });
  }
  catch (error) {
    console.log(error)
    res.status(INTERNAL_SERVER_ERROR).send({
      message: "Authentication Error",
      error: error.message,
    })
  }
}