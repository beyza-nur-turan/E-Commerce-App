const express = require("express");
const router = express.Router();
const Brand = require("../models/Brand");


router.post("/", async (req, res) => {
    try {
      const {img}=req.body
      const newBrand = new Brand( {img} );
      await newBrand.save();
  
      res.status(201).json(newBrand); 
    } catch (error) {
      console.log({error});
    }
  });
  router.get("/",async(req,res)=>{
    try {
      const brands=await Brand.find();
      res.status(200).json(brands);
      
    } catch (error) {
      console.log(error)
    }
  });
  
  
  router.delete("/:brandId",async(req,res)=>{
    try {
      const brandId=req.params.brandId;
      const deletedBrand=await Brand.findByIdAndDelete(brandId)
      if(!deletedBrand){
        return res.status(404).json({error:"not found brand !"})
      }
      res.status(200).json(deletedBrand);
      
    } catch (error) {
      console.log(error)
      res.status(500).json({error:"server error"})
    }
  })


module.exports = router;