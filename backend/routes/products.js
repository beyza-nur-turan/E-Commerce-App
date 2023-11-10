const express = require("express");
const router = express.Router();
const Product=require("../models/Product");

//CREATE
router.post("/", async (req, res) => {
    try {
      const newProduct = new Product( req.body );
      await newProduct.save();
  
      res.status(201).json(newProduct); //yeni bir şey oluşturuncaki başarı kodu :201 dir
    } catch (error) {
      console.log({error});
    }
  });
  // GET-ALL
  router.get("/",async(req,res)=>{
    try {
      const products=await Product.find();
      res.status(200).json(products);
      
    } catch (error) {
      console.log(error)
    }
  });
  // GET BY ID
  router.get("/:productId",async(req,res)=>{
    try {
      const productId=req.params.productId;
      if(!productId){
        res.status(500).json({error:"Ürün id si bulunamadı"});
      }
      try {
        const product=await Product.findById(productId);
        res.status(200).json(product);
        
      } catch (error) {
        console.log(error);
      res.status(404).json({ error: "Ürün bulunamadı!" });
      }
      
    } catch (error) {
      console.log(error)
      res.status(500).json({error:"Server error"})
    }
  })
  //UPDATE PRODUCTS
  router.put("/:productId",async(req,res)=>{
    try {
      const productId=req.params.productId;
      const updates=req.body;
      const existingProduct=await Product.findById(productId)
      if(!existingProduct){
        return res.status(404).json({error:"ürün bulunamadı!"})
      }
      const updatedProduct=await Product.findByIdAndUpdate(
        productId,
        updates,
        {new:true}
      );
      res.status(200).json(updatedProduct)
      
    } catch (error) {
      console.log(error);
    res.status(500).json({ error: "Server error." });
    }
  });
  //DELETE PRODUCTS
  router.delete("/:productId",async(req,res)=>{
    try {
      const productId=req.params.productId;
      const deletedProduct=await Product.findByIdAndDelete(productId)
      if(!deletedProduct){
        return res.status(404).json({error:"ürün bulunamadı!"})
      }
      res.status(200).json(deletedProduct);
      
    } catch (error) {
      console.log(error)
      res.status(500).json({error:"server error"})
    }
  })


module.exports = router;