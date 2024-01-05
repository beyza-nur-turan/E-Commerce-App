const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);



async function calculateTotalRevenue() {
  try {
    // Stripe'dan tüm ödemeleri alır
    const payments = await stripe.paymentIntents.list({ limit: 100 }); // Limiti ihtiyaca göre ayarlayabilirsiniz

    // Ödemelerin toplam tutarını hesaplar
    const totalRevenue = payments.data.reduce((total, payment) => {
      return total + (payment.amount_received || 0);
    }, 0);

    return totalRevenue;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

// Genel toplamı döndür
router.get("/totalRevenue", async (req, res) => {
  try {
    const totalRevenue = await calculateTotalRevenue();
    res.status(200).json({ totalRevenue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error.", details: error.message });
  }
});

async function calculateTotalCustomers() {
  try {
    // Stripe'dan tüm müşterileri alır
    const customers = await stripe.customers.list({ limit: 100}); // Limiti ihtiyaca göre ayarlayabilirsiniz

    const totalCustomers = customers.data.length;

    return totalCustomers;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

router.get("/totalCustomers", async (req, res) => {
  try {
    const totalCustomers = await calculateTotalCustomers();
    res.status(200).json({ totalCustomers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error.", details: error.message });
  }
});
async function calculateTotalProductsSold() {
  try {
    // Stripe'dan tüm ödemeleri alır
    const payments = await stripe.paymentIntents.list({ limit: 100 });
    console.log(payments)
    // Ödemelerdeki ürün sayısını toplar
    const totalProductsSold = payments.data.reduce((total, payment) => {
      
      if (payment.products && Array.isArray(payment.products)) {
        const productsSold = payment.products.reduce((totalProducts, product) => {
          return totalProducts + (product.quantity || 0);
        }, 0);
        return total + productsSold;
      }
      return total;
    }, 0);

    return totalProductsSold;
  } catch (error) {
    console.error(error);
    return 0;
  }
}


router.get("/totalProductsSold", async (req, res) => {
  try {
    const totalProductsSold = await calculateTotalProductsSold();
    res.status(200).json({ totalProductsSold });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error.", details: error.message });
  }
});

module.exports = router;
