import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react"
import { PaymentForm } from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51JOlrrFTiOvO1nWfhoO6y7uUxBwyiNwSAiHzKnrM5rkCquiTpFYK9wamrKPMw8CfF5M0BBju63peRYQjBXNwiqJE00Aah2leya"

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const ProductDisplay = () => {
    return (
        <Elements stripe={stripeTestPromise} className="CheckoutContainer">
            <PaymentForm />
        </Elements>
    )
}

export default ProductDisplay


