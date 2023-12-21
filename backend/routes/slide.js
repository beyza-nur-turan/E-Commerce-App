const express = require('express');
const router = express.Router();
const multer = require('multer');
const Slide = require('../models/Slide');

const storage = multer.memoryStorage(); // Bellek üzerinde dosyayı tutma
const upload = multer({ storage: storage });
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


router.post("/",async(req,res)=>{
  try {
  
      
  
      const newSlide = new Slide(req.body);
      await newSlide.save();
  
      res.status(201).json(newSlide);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
})

// router.post('/', upload.single('slides'), async (req, res) => {
//   try {
//     const slideData = req.file.buffer.toString('base64');
//     const newSlide = new Slide({ img: [slideData] });
//     await newSlide.save();

//     res.status(201).json(newSlide);
//   } catch (error) {
//     console.error('Error uploading slide:', error);
//     res.status(500).json({ success: false, message: 'Error uploading slide' });
//   }
// });


router.get("/",async(req,res)=>{
    try {
      const slides=await Slide.find();
      res.status(200).json(slides);
      
    } catch (error) {
      console.log(error)
    }
  });
  // Belirli bir slide getirme
router.get("/:slideId", async (req, res) => {
  //buradaki slideId bir params değeridir. yani slide dan sonra gelecek özelliği temsil ediyor
  try {
    const SlideId = req.params.slideId;
    try {
      const slide = await Category.findById(SlideId);

      res.status(200).json(slide);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Slide bulunamadı" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
//Slide güncelleme
router.put("/:slideId", async (req, res) => {
  try {
    const slideId = req.params.logoId;
    const updates = req.body;
    const existingSlide = await Category.findById(slideId);
    if (!existingSlide) {
      return res.status(404).json("Slide bulunamadı!");
      //res.status(404).json({ error: "Category not found." });
    }

    const updatedSlide = await slide.findByIdAndUpdate(
      SlideId,
      updates,
      { new: true } // güncellenmiş değeri göndermesi için yazıldı
    );
    res.status(200).json(updatedSlide);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

//Slide silme
router.delete("/:slideId", async (req, res) => {
  try {
    const slideId = req.params.slideId;
    const deletedSlide = await Category.findByIdAndDelete(slideId);
    if (!deletedSlide) {
      return res.status(404).json({ error: "Slide bulunamadı!" });
    }
    res.status(200).json(deletedSlide);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
module.exports = router;
