const express = require("express");

const blogController = require("../controllers/blog");

const fileUploadMiddleware = require("../middlewares/fileUploadMiddleware");

const router = express.Router();


router
    .get("/", blogController.getBlogList)
    .post("/", fileUploadMiddleware.single('image'), blogController.createBlog)
    .patch("/", blogController.editBlog)
    .delete("/", blogController.deleteBlog)


module.exports = router;