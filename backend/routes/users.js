const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.get("/", async (req, res) => {
    try {
      const users = await User.find(); //Category modelindeki verileri bulur
      res.status(200).json(users); //verilerin başarıyla alındığını ifade eder
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "server hatası" });
    }
  });
  
  router.delete("/:email", async (req, res) => {
    try {
      const email = req.params.email;
  
      const deletedUser = await User.findOneAndDelete({ email });
  
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found." });
      }
  
      res.status(200).json(deletedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });
  module.exports=router