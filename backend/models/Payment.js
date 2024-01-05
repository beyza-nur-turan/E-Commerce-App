// models/Payment.js

const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Kullanıcıya bağlantı
  sessionId: String,
  products: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  cargoFee: Number,
  totalAmount: Number, // Toplam ödeme miktarı
  totalProductsSold: Number, // Toplam satılan ürün sayısı
  totalCustomers: Number, // Toplam müşteri sayısı
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", PaymentSchema);

module.exports = Payment;
