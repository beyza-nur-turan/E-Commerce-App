const express = require("express");
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/get-payment-intent/:amount', async (req, res) => {
    try {
      const amount = parseInt(req.params.amount);
  
      if (isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: 'Invalid amount' });
      }
  
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
      });
  
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error('Error processing payment intent:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
