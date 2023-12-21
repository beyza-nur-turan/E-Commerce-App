// // routes/payment.js

// const express = require("express");
// const router = express.Router();
// const dotenv = require("dotenv");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const Payment = require("../models/Payment");

// router.post("/", async (req, res) => {
//   const { products, user, cargoFee } = req.body;

//   const lineItems = products.map((product) => ({
//     price_data: {
//       currency: "usd",
//       product_data: {
//         name: product.name,
//       },
//       unit_amount: Math.round(product.price * 100),
//     },
//     quantity: product.quantity,
//   }));

//   if (cargoFee !== 0) {
//     lineItems.push({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: "Hızlı Kargo",
//         },
//         unit_amount: cargoFee * 100,
//       },
//       quantity: 1,
//     });
//   }

//   try {
//     const session = await stripe.checkout.sessions.create({
//       customer_email: user.email,
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: `${process.env.CLIENT_DOMAIN}/success`,
//     });

//     // Ödeme bilgilerini MongoDB'ye kaydet
//     const payment = new Payment({
//       userId: user._id,
//       sessionId: session.id,
//       products: products,
//       cargoFee: cargoFee,
//       totalAmount: calculateTotalAmount(products, cargoFee),
//       totalProductsSold: calculateTotalProductsSold(products),
//       totalCustomers: 1, // Yeni bir müşteri olduğunu varsayalım
//     });

//     await payment.save();

//     res.status(200).json({ id: session.id });
//   } catch (error) {
//     console.error("Ödeme Hatası:", error);
//     res.status(500).json({ error: "Server error." });
//   }
// });
// router.get("/",async(req,res)=>{
//   try {
//     const payments=await Payment.find();
//     res.status(200).json(payments);
    
//   } catch (error) {
//     console.log(error)
//   }
// });

// // Yardımcı fonksiyonlar
// const calculateTotalAmount = (products, cargoFee) => {
//   const productTotal = products.reduce(
//     (total, product) => total + product.price * product.quantity,
//     0
//   );
//   return productTotal + cargoFee;
// };

// const calculateTotalProductsSold = (products) => {
//   return products.reduce((total, product) => total + product.quantity, 0);
// };

// module.exports = router;


const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
  const { products, user, cargoFee } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));

  if (cargoFee !== 0) {
    lineItems.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Hızlı Kargo",
        },
        unit_amount: cargoFee * 100,
      },
      quantity: 1,
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      customer_email:user.email,
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_DOMAIN}/success`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;