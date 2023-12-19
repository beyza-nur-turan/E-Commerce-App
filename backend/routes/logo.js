const express = require('express');
const router = express.Router();
const multer = require('multer');
const Logo = require('../models/Logo');

const storage = multer.memoryStorage(); // Bellek üzerinde dosyayı tutma
const upload = multer({ storage: storage });
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


router.post('/logo', upload.single('logo'), async (req, res) => {
  try {
    // Logo yükleme işlemleri burada gerçekleşir
    const logoData = req.file.buffer.toString('base64');

    // Logo verilerini MongoDB veya başka bir yerde saklayabilirsiniz
    const newLogo = new Logo({ img: [logoData] });
    await newLogo.save();

    res.status(201).json(newLogo);
  } catch (error) {
    console.error('Error uploading logo:', error);
    res.status(500).json({ success: false, message: 'Error uploading logo' });
  }
});

router.get("/",async(req,res)=>{
    try {
      const logos=await Logo.find();
      res.status(200).json(logos);
      
    } catch (error) {
      console.log(error)
    }
  });
module.exports = router;
