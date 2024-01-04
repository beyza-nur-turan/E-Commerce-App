const express = require("express");
const router = express.Router();

// Diğer rota dosyalarını içe aktarıyoruz
const categoryRoute = require("./categories.js");
const productRoute = require("./products.js");
const authRoute = require("./auth.js");
const couponRoute = require("./coupon.js");
const userRoute = require("./users.js");
const paymentRoute=require("./payment.js")
const logoRoute=require("./logo.js")
const slideRoute=require("./slide.js")
const blogRoute=require("./blogs.js")
const contactRoute=require("./contact.js")
const officeInfoRoute=require("./officeInfo.js")
const brandRoute=require("./brands.js")

// Her rotayı ilgili yol altında kullanıyoruz
router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/auth", authRoute);
router.use("/coupons", couponRoute);
router.use("/users", userRoute);
router.use("/payment",paymentRoute);
router.use("/logo",logoRoute);
router.use("/slides",slideRoute);
router.use("/blogs",blogRoute);
router.use("/contact",contactRoute);
router.use("/officeInfo",officeInfoRoute);
router.use("/brands",brandRoute);

module.exports = router;