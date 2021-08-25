import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { REACT_APP_API } from '../../store/Consts/Consts'
import './PaymentForm.css';

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff"
        }
    }
}

export const PaymentForm = () => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post(`${REACT_APP_API}/checkout`, {
                    amount: 500000,
                    id
                })
                if (response.data.success) {
                    console.log("Success Payment")
                    setSuccess(true)
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button className='payButton'>Pay</button>
                </form>
                :
                <div>
                    <h2>You just bought something
                    </h2>
                </div>
            }
        </>
    )
}


