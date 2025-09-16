const express = require("express");
const Blog = require("../models/blog.model.js");
const { createBlogs, getAllBlogs } = require("../controllers/blog.controllers.js");

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

blogRouter.get("/:slug", (req, res) => {
  res.send({ title: "GETS a particular blog" });
});

blogRouter.post("/", createBlogs);

blogRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATES a particular blog" });
});

blogRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETEs a particular blog" });
});

module.exports = blogRouter;
