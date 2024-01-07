const express = require("express");
const router = express.Router();
const OfficeInfo = require("../models/OfficeInfo");
router.get("/", async (req, res) => {
    try {
      const officeInfo = await OfficeInfo.find(); 
      res.status(200).json(officeInfo); 
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "server hatası" });
    }
  });
  router.post("/", async (req, res) => {
    try {
      const { officeName, officePhone,officeMail,officeOpenWeekday,officeOpenWeekend,officeAddress } = req.body;
      const newOfficeInfo = new OfficeInfo({ officeName, officePhone,officeMail,officeOpenWeekday,officeOpenWeekend,officeAddress });
      await newOfficeInfo.save();
  
      res.status(201).json(newOfficeInfo);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "server hatası" });
    }
  });
  router.delete("/:officeInfoId", async (req, res) => {
    try {
      const officeInfoId = req.params.officeInfoId;
      const deletedOffice = await OfficeInfo.findByIdAndDelete(officeInfoId);
      if (!deletedOffice) {
        return res.status(404).json({ error: "Ofis bulunamadı!" });
      }
      res.status(200).json(deletedOffice);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });
  module.exports=router