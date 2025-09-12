const mongoose = require("mongoose");
const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env.js");

const signup = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      let error = new Error("User already exist");
      error.statusCode = 409;
      throw error;
    }

    const newUser = await User.create([{ name, email, password }], { session });

    const token = jwt.sign({ userId: newUser[0]._id }, JWT_SECRET);

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message: "User created",
      data: { token, user: newUser[0] },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (!user) {
      let error = new Error("Invalid Credentials");
      error.statusCode = 401;
      throw error;
    }

    const passwordMatch = await user.comparePassword(password);

    if (!passwordMatch) {
      let error = new Error("Invalid Credentials");
      error.statusCode = 401;
      throw error;
    }
    let token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.status(200).json({ success: true, data: { token, user } });
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login };
