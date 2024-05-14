const mongoose = require("mongoose");
const Blog = require("../Models/BlogModel");

// CREATE BLOG
const CreateBlog = async (req, res) => {
  const { title, description, isPublished, author } = req.body;

  if (!title || !description || !isPublished || !author) {
    res.status(400);
    throw new Error("Please fill all details !".red);
  }
  const NewBlog = await Blog.create({
    title,
    description,
    isPublished,
    author,
    coverImage: req.file.path,
  });
  if (NewBlog) {
    res.status(200).json(NewBlog);
  } else {
    throw new Error("Something went wrong".red);
  }
};

// GET ALL BLOGS
const GetBlogs = async (req, res) => {
  const allBlogs = await Blog.find();
  res.json(allBlogs);
};

// GET SINGLE BLOG
const GetBlog = async (req, res) => {
  const singleBlog = await Blog.findById(req.params.blogId);
  if (!singleBlog) {
    res.status(404);
    throw new Error("Blog not found !");
  };
  res.status(200).json(singleBlog);
};

// UPDATE BLOG
const UpdateBlog = async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(
    req.params.blogId,
    req.body,
    { new: true }
  );
  if (!UpdateBlog) {
    res.status(400);
    throw new Error("Cannot update !");
  }
  res.status(200).json(updatedBlog);
};

// DELETE BLOG
const DeleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.blogId);
  res.json({
    msg: "Blog Deleted !",
  });
};

module.exports = {
  CreateBlog,
  GetBlogs,
  GetBlog,
  UpdateBlog,
  DeleteBlog,
};
