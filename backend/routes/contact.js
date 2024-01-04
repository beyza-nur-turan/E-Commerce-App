const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
router.get("/", async (req, res) => {
    try {
      const contact = await Contact.find(); 
      res.status(200).json(contact); 
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "server hatası" });
    }
  });
  router.post("/", async (req, res) => {
    try {
      const { userName, email,subject,message } = req.body;
      const newContact = new Contact({ userName,email,subject,message });
      await newContact.save();
  
      res.status(201).json(newContact);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "server hatası" });
    }
  });
  
  router.delete("/:email", async (req, res) => {
    try {
      const email = req.params.email;
  
      const deletedContact = await Contact.findOneAndDelete({ email });
  
      if (!deletedContact) {
        return res.status(404).json({ error: "contact information not found." });
      }
  
      res.status(200).json(deletedContact);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });
  module.exports=router