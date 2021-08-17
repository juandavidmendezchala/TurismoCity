import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './ActivitiesReservation.css'
import { useSelector } from "react-redux"
//Importo librerias necesarias
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

export default function ActivitiesReservation() {
    //importo succes y config pagos
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    //Guardo en una variable los datos que contenga activity en redux
    const data = useSelector(state => state.activity)

    //handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:3001/checkout", {
                    amount: data.price,
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
        <div>
            <h2>¡Reserva ahora!</h2>
            <div>
                <form className="reservation-form" >
                    <div className="reservation-label">
                        <label>¿Cuándo quieres iniciar tu aventura?</label>
                        <input className="reservation-input" type="date" ></input>
                    </div>
                    <div className="reservation-label">
                        <label>¿Cuántas personas irán?</label>
                        <input className="reservation-input" type="number" min="0" max="99" ></input>
                    </div>
                    <Link to="/activity/compra">
                        <button className="reservation-button">¡Empezar aventura!</button>
                    </Link>
                    <>
                        {!success ?
                            <form onSubmit={handleSubmit}>
                                <fieldset className="FormGroup">
                                    <div className="FormRow">
                                        <CardElement />
                                    </div>
                                </fieldset>
                                <button>Pay</button>
                            </form>
                            :
                            <div>
                                <h2>You just bought something
                                </h2>
                            </div>
                        }
                    </>
                </form>
            </div>

        </div>
    )
}