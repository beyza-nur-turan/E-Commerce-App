const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

//Yeni kategori oluşturma(CREATE)
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;
    const newCategory = new Category({ name, img });
    await newCategory.save();

    res.status(201).json(newCategory); //yeni bir şey oluşturuncaki başarı kodu :201 dir
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server hatası" });
  }
});
// Tüm kategorileri getirme
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find(); //Category modelindeki verileri bulur
    res.status(200).json(categories); //verilerin başarıyla alındığını ifade eder
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server hatası" });
  }
});
// Belirli bir kategoriyi getirme
router.get("/:categoryId", async (req, res) => {
  //buradaki categoryId bir params değeridir. yani categories den sonra gelecek özelliği temsil ediyor
  try {
    const categoryId = req.params.categoryId;
    try {
      const category = await Category.findById(categoryId);

      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Category not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
//Kategori güncelleme
router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updates = req.body;
    const existingCategory = await Category.findById(categoryId);
    if (!existingCategory) {
      return res.status(404).json("Kategori bulunamadı!");
      //res.status(404).json({ error: "Category not found." });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updates,
      { new: true } // güncellenmiş değeri göndermesi için yazıldı
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

//Kategori silme
router.delete("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ error: "Kategori bulunamadı!" });
    }
    res.status(200).json(deletedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
