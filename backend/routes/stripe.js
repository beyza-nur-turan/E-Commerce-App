const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


const createCustomerAndAddCard = async (name, cardNumber, expMonth, expYear, cvc) => {
  try {
    // Müşteri oluştur
    const customer = await stripe.customers.create({
      name: name,
    });

    // Müşteriye ait kredi kartını ekle
    const card = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: cardNumber,
        exp_month: expMonth,
        exp_year: expYear,
        cvc: cvc,
      },
    });

    await stripe.paymentMethods.attach(card.id, { customer: customer.id });

    // İşlemleri kontrol etmek için
    console.log('Customer ID:', customer.id);
    console.log('Card ID:', card.id);
  } catch (error) {
    console.error('Hata:', error);
  }
};
router.get("/createStripe", async (req, res) => {
  try {
    const stripeUser = await createCustomerAndAddCard();
    res.status(200).json({ stripeUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error.", details: error.message });
  }
});




async function calculateTotalRevenue() {
  try {
    // Stripe'dan tüm ödemeleri alır
    const payments = await stripe.paymentIntents.list({ limit: 100 }); 
    console.log(`payment değeri: ${payments}`)

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
    const customers = await stripe.customers.list({ limit: 100 });

    console.log("Customers from Stripe:", customers);

    const totalCustomers = customers.data.length;
    console.log("Total Customers:", totalCustomers);


    return totalCustomers;
  } catch (error) {
    console.error("Error in calculateTotalCustomers:", error);
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
router.get("/totalCustomersByMonth", async (req, res) => {
  try {
    const currentMonth = new Date().getMonth() + 1; // 1-12 arası bir değer
    const lastMonthCustomers = await stripe.customers.list({
      limit: 100,
      created: {
        gte: Math.floor(new Date(new Date().setMonth(new Date().getMonth() - 1)).getTime() / 1000),
        lte: Math.floor(new Date().getTime() / 1000),
      },
    });

    const totalCustomersByMonth = [{ month: currentMonth, totalCustomers: lastMonthCustomers.data.length }];

    res.status(200).json({ totalCustomersByMonth });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error.", details: error.message });
  }
});


async function calculateTotalProductsSold() {
  try {
    // Stripe'dan tüm ödemeleri alır
    const payments = await stripe.paymentIntents.list({ limit: 100 });
    
    // Sadece başarılı (succeeded) ödemeleri filtreler
    const successfulPayments = payments.data.filter(payment => payment.status === 'succeeded');

    // Başarılı ödemelerdeki ürün sayısını toplar
    const totalProductsSold = successfulPayments.length;

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

function groupPaymentsByMonth(payments) {
  const groupedData = {};

  payments.forEach((payment) => {
    const month = new Date(payment.created * 1000).getMonth() + 1; // Unix timestamp'i aya çevir
    if (!groupedData[month]) {
      groupedData[month] = [];
    }
    groupedData[month].push(payment);
  });

  return groupedData;
}

router.get("/totalSalesByMonth", async (req, res) => {
  try {
    // Stripe'dan tüm ödemeleri alır
    const payments = await stripe.paymentIntents.list({ limit: 100 });

    // Ödeme verilerini aylara göre gruplar
    const groupedPayments = groupPaymentsByMonth(payments.data);

    // Aylık satış verilerini oluşturur
    const monthlySalesData = Object.keys(groupedPayments).map((month) => {
      return {
        month: parseInt(month),
        satilanUrunSayisi: groupedPayments[month].length,
      };
    });

    res.status(200).json({ monthlySalesData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error.", details: error.message });
  }
});

module.exports = router;
