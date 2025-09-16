const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env.js");
const User = require("../models/user.model.js");

const authorize = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res
        .status(401)
        .json({ success: true, message: "No token authorization" });
    }

    let decoded = jwt.verify(token, JWT_SECRET);

    let user = await User.findById(decoded.userId).select("-password");

    if (!user) return res.status(401).json({ message: "Unauthorised" });

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorize