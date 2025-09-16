const Blog = require("../models/blog.model.js");

const createBlogs = async (req, res, next) => {
  try {
    const blog = await Blog.create({ ...req.body });
    res
      .status(201)
      .json({ success: true, message: "Blog created sucessfully", data: blog });
  } catch (error) {
    next(error);
  }
};

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({ status: "published" }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    next(error);
  }
};

module.exports = { createBlogs, getAllBlogs };
