const express = require("express");
const router = express.Router();

// Diğer rota dosyalarını içe aktarıyoruz
const categoryRoute = require("./categories.js");
const productRoute = require("./products.js");
const authRoute = require("./auth.js");

// Her rotayı ilgili yol altında kullanıyoruz
router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/auth", authRoute);

module.exports = router;