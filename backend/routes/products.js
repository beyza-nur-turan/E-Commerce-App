const express = require("express");
const router = express.Router();
const Product=require("../models/Product")

// Tüm ürünleri getirme (Read- All)
router.get("/", async (req, res)=> {
    res.send("Ürünler getirildi!");
});
//CREATE
router.post("/", async (req, res) => {
    try {
      const newProduct = new Category( req.body );
      await newProduct.save();
  
      res.status(201).json(newProduct); //yeni bir şey oluşturuncaki başarı kodu :201 dir
    } catch (error) {
      console.log(error);
    }
  });


module.exports = router;