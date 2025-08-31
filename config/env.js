require("dotenv").config({ path: ".env" });

const { MONGODB_URI } = process.env;

module.exports = MONGODB_URI;
