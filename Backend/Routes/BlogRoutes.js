const express = require("express")
const multer = require("multer")
const { CreateBlog, GetBlogs, GetBlog, UpdateBlog, DeleteBlog } = require("../Controlers/BlogControler")

const router = express.Router()


const storage = multer.diskStorage({
    
    destination: (req, file, cb)=>{
        cb(null, "uploads/")
    },
    
    filename:(req, file, cb)=>{
        cb(null, "file" + Date.now() + "-" + file.originalname)
    }
})

const uploads = multer({storage})

// Create Blog
router.post("/", uploads.single("coverImage"), CreateBlog)

// Get all blogs
router.get("/", GetBlogs)

// Get single blog
router.get("/:blogId", GetBlog)

// Update blog
router.put("/:blogId", UpdateBlog)

// Delete blog
router.delete("/:blogId", DeleteBlog)

module.exports = router