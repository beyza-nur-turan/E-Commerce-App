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

    
    const newLogo = new Logo({ img:[logoData] });
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
  // Belirli bir logo getirme
router.get("/:logoId", async (req, res) => {
  //buradaki logoId bir params değeridir. yani logo dan sonra gelecek özelliği temsil ediyor
  try {
    const LogoId = req.params.categoryId;
    try {
      const logo = await Category.findById(LogoId);

      res.status(200).json(logo);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Logo bulunamadı" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
//Logo güncelleme
router.put("/:logoId", async (req, res) => {
  try {
    const logoId = req.params.logoId;
    const updates = req.body;
    const existingLogo = await Category.findById(logoId);
    if (!existingLogo) {
      return res.status(404).json("Logo bulunamadı!");
      //res.status(404).json({ error: "logo not found." });
    }

    const updatedLogo = await logo.findByIdAndUpdate(
      logoId,
      updates,
      { new: true } // güncellenmiş değeri göndermesi için yazıldı
    );
    res.status(200).json(updatedLogo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

//Logo silme
router.delete("/:logoId", async (req, res) => {
  try {
    const logoId = req.params.logoId;
    const deletedLogo = await Category.findByIdAndDelete(logoId);
    if (!deletedLogo) {
      return res.status(404).json({ error: "Kategori bulunamadı!" });
    }
    res.status(200).json(deletedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
module.exports = router;
