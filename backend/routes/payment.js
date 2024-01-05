const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Payment=require("../models/Payment")

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
      customer_email: user.email,
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_DOMAIN}/success`,
    });
    const payment = new Payment({
      userId: user._id,
      sessionId: session.id,
      products: products,
      cargoFee: cargoFee,
      totalAmount: calculateTotalAmount(products, cargoFee),
      totalProductsSold: calculateTotalProductsSold(products),
      totalCustomers: await calculateTotalCustomers(user._id),
      createdAt: new Date(),
    });
    await payment.save();

    res.status(200).json({ id: session.id,totalAmount:payment.totalAmount,totalProductsSold:payment.totalProductsSold,totalCustomers:payment.totalCustomers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    // Ödeme geçmişini Stripe'dan alır
    const payments = await stripe.paymentIntents.list({ limit: 10 });
    // Ödeme geçmişini istemciye gönderir
    res.status(200).json(payments.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error.",detaylar: error.message });
  }
});
function calculateTotalAmount(products, cargoFee) {
  let totalAmount = 0;

  if (products && Array.isArray(products)) {
    
    const productsTotal = products.reduce((total, product) => {
      return total + ((product.price || 0) * (product.quantity || 0));
    }, 0);

    //ücretsiz kargo eklenen total fiyat
    totalAmount = productsTotal + (cargoFee || 0);
  }

  return totalAmount;
}

function calculateTotalProductsSold(products) {
  let totalProductsSold = 0;

  if (products && Array.isArray(products)) {
    // Loop through each product and sum the quantity
    totalProductsSold = products.reduce((total, product) => {
      return total + (product.quantity || 0);
    }, 0);
  }

  return totalProductsSold;
}
async function calculateTotalCustomers(userId) {
  try {
    // Toplam müşteri sayısını hesaplamak için mantığınızı uygulayın
    const totalCustomers = await Payment.distinct("userId").countDocuments();
    return totalCustomers;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

module.exports = router;
