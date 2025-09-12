const express = require("express");
const { signup, login } = require("../controllers/auth.controllers.js");
const authRouter = express.Router();

authRouter.post("/signup", signup);

authRouter.post("/login", login);

authRouter.post("/logout", (req, res) => {
  res.send({ title: "Logout a user" });
});

module.exports = authRouter;
