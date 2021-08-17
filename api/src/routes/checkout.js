const { Router } = require('express');
const server = Router();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const cors = require("cors")



server.post("/", cors(), async (req, res) => {
    let { amount, id } = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount: 50000,
            currency: "USD",
            description: "LowHenry",
            payment_method: id,
            confirm: true
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment Succesful",
            succes: true
        })
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment Declined",
            succes: false
        })
    }
})

module.exports = server