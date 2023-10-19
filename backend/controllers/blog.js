const Blog = require("../models/Blog");

const getBlogList = async (req, res) => {
    const blogs = await Blog.find({}).populate('createdBy');
    res.json({
        success: true,
        results: blogs
    });
}

const createBlog = async (req, res) => {
    const filePath = '/files/' + req.file.filename;
    const blogData = {
        title: req.body.title,
        description: req.body.description,
        image: filePath,
        createdBy: req.body.createdBy
    };

    const blog = new Blog(blogData);
    await blog.save();

    res.json({
        success: true,
        message: "Blog created successfully"
    });
};

const editBlog = (req, res) => {
    res.json({
        success: true
    })
};

const deleteBlog = (req, res) => {
    res.json({
        success: true
    })
};

module.exports = {
    createBlog,
    editBlog,
    deleteBlog,
    getBlogList
};