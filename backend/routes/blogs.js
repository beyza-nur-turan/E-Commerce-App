const express = require("express");
const router = express.Router();
const Blog=require("../models/Blog");


router.post("/", async (req, res) => {
    try {
      const newBlog = new Blog( req.body );
      await newBlog.save();
  
      res.status(201).json(newBlog); 
    } catch (error) {
      console.log({error});
    }
  });
  router.get("/",async(req,res)=>{
    try {
      const blogs=await Blog.find();
      res.status(200).json(blogs);
      
    } catch (error) {
      console.log(error)
    }
  });
  router.get("/:blogId",async(req,res)=>{
    try {
      const blogId=req.params.blogId;
      if(!blogId){
        res.status(500).json({error:"blog id si bulunamadı"});
      }
      try {
        const blog=await Blog.findById(blogId);
        res.status(200).json(blog);
        
      } catch (error) {
        console.log(error);
      res.status(404).json({ error: "blog bulunamadı!" });
      }
      
    } catch (error) {
      console.log(error)
      res.status(500).json({error:"Server error"})
    }
  })
  router.put("/:blogId",async(req,res)=>{
    try {
      const blogId=req.params.blogId;
      const updates=req.body;
      const existingBlog=await Product.findById(blogId)
      if(!existingBlog){
        return res.status(404).json({error:"blog bulunamadı!"})
      }
      const updatedBlog=await Blog.findByIdAndUpdate(
        blogId,
        updates,
        {new:true}
      );
      res.status(200).json(updatedBlog)
      
    } catch (error) {
      console.log(error);
    res.status(500).json({ error: "Server error." });
    }
  });
  router.delete("/:blogId",async(req,res)=>{
    try {
      const blogId=req.params.blogId;
      const deletedBlog=await Blog.findByIdAndDelete(blogId)
      if(!deletedBlog){
        return res.status(404).json({error:"blog bulunamadı!"})
      }
      res.status(200).json(deletedBlog);
      
    } catch (error) {
      console.log(error)
      res.status(500).json({error:"server error"})
    }
  })
 
//   router.get("/search/:blogName",async(req,res)=>{
//     try {
//       const blogName=req.params.blogName;
//       const blogs=await Blog.find({
//         name:{$regex:blogName,$options:"i"},
//       });
//       res.status(200).json(blogs); 
//     } catch (error) {
//       console.log(error)
//     }
//   })


module.exports = router;