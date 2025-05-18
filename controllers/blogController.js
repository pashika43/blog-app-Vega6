const Blog = require('../models/Blog');
const fs = require('fs');
const path = require('path');

exports.createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
      const image = req.file ? req.file.filename : null;

    const newBlog = new Blog({
      title,
        description,
      image,
      user: req.user.id
    });

    await newBlog.save();
      res.status(201).json(newBlog);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id });
      res.json(blogs);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
      const blog = await Blog.findById(id);

    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    blog.title = title;
    blog.description = description;
    if (req.file) {
      if (blog.image) {
        const oldPath = path.join(__dirname, '../uploads/', blog.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      blog.image = req.file.filename;
    }

    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    if (blog.image) {
      const filePath = path.join(__dirname, '../uploads/', blog.image);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

      await Blog.findByIdAndDelete(id);
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
