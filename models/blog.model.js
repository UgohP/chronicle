const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
      trim: true,
      required: [true, "Blog title is required"],
    },
    body: {
      type: String,
      required: [true, "Blog body is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
