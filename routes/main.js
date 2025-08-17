const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  const locals = {
    title: "Chronicle",
    description:
      "Chronicle is a simple and modern blog platform built with Node.js, Express, and EJS. Create, read, update, and manage posts seamlessly while learning the fundamentals of backend development, REST APIs, and web authentication.",
  };

  res.render("index", { locals });
});

module.exports = router;
