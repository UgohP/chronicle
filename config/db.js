const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config/env.js");

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI variable inside .env file");
}

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGODB_URI);
    console.log(`Database Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log("Error Connecting to database", error);
    process.exit(1);
  }
};

module.exports = connectDB;
