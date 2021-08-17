import React from 'react'
import axios from "axios"
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js"


const Checkout = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)

        })
        if (!error) {
            const { id } = paymentMethod;
            const { data } = await axios.post("http://localhost:3001/checkout", {
                id,
                amount: 5000000
            })
            console.log(data)
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <img src="https://raftingcatalunya.es/images/rafting/descenso-de-un-rio-en-rafting.jpg" alt="Rafting img"></img>
            <h3>Price: ¢5000</h3>
            <CardElement></CardElement>
            <button>Reservar</button>
        </form>

    )
}

export default Checkout
