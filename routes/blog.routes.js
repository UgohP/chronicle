const express = require("express");
const {
  createBlogs,
  getAllBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controllers.js");
const authorize = require("../middleware/auth.middleware.js");

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

blogRouter.get("/:slug", getBlogBySlug);

blogRouter.post("/", authorize, createBlogs);

blogRouter.put("/:id", authorize, updateBlog);

blogRouter.delete("/:id", authorize, deleteBlog);

module.exports = blogRouter;
