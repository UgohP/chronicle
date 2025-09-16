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

const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
      status: "published",
    });

    if (!blog) {
      let error = new Error("Blog does not exist");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      let error = new Error("Blog not found");
      error.statusCode = 404;
      throw error;
    }

    const disallowed = ["_id", "createdAt"];
    const updates = { ...req.body };
    disallowed.forEach((field) => delete updates[field]);

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: updatedBlog });
  } catch (error) {
    next(error);
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      let error = new Error("Blog not found");
      error.statusCode = 404;
      throw error;
    }

    await blog.deleteOne();

    res.status(200).json({ success: true, message: "Delete Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBlogs,
  getAllBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
};
