import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './ActivitiesReservation.css'
import { useSelector, useDispatch } from "react-redux"
import { purchase } from "../../store/actions/purchase"
//Importo librerias necesarias
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import {REACT_APP_API} from '../../store/Consts/Consts'
import axios from 'axios'


export const ActivitiesReservation = () => {
    const dispatch = useDispatch();
    //importo succes y config pagos
    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState(false);

    //Guardo en una variable los datos que contenga activity en redux
    const data = useSelector(state => state.activity)
    const idUser = useSelector(state => state.userSignin.userInfo.id)
    console.log("IdUSER", idUser)
    console.log(data.activity.price)

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
                const response = await axios.post(`${REACT_APP_API}/checkout`, {
                    amount: data.activity.price,
                    id,
                })
                if (response.data.success) {
                    console.log("Success Payment")
                    setSuccess(true)
                }
                dispatch(purchase(idUser, data.activity.id, "2021-08-17"))
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log(error.message)
        }
        alert("Compra Realizada")
    }
    return (
        <div className="PayContainer">
            <h2>¡Reserva ahora!</h2>
            <div><>
                {!success ?
                    <form onSubmit={handleSubmit}>
                        <div className="reservation-label">
                            <label>¿Cuándo quieres iniciar tu aventura?</label>
                            <input className="reservation-input" type="date" ></input>
                        </div>
                        <div className="reservation-label">
                            <label>¿Cuántas personas irán?</label>
                            <input className="reservation-input" type="number" min="0" max="99" ></input>
                        </div>
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
                {/* <form className="reservation-form" onSubmit={handleSubmit} >
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
                    </Link> */}


            </div>

        </div>
    )
}


