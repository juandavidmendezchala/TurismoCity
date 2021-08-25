import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './ActivitiesReservation.css'
import { useSelector, useDispatch } from "react-redux"
import { purchase } from "../../store/actions/purchase"
//Importo librerias necesarias
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { REACT_APP_API } from '../../store/Consts/Consts'
import swal from 'sweetalert';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import { pendingPurchase } from '../../store/actions/pendingPurchase';


export const ActivitiesReservation = () => {
    const dispatch = useDispatch();
    //importo succes y config pagos
    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState(false);
    
    //login para redireccionar si aun no es usuario al momento de querer comprar
    const { loginWithRedirect } = useAuth0()

    //Guardo en una variable los datos que contenga activity en redux
    const data = useSelector(state => state.activity)
    const userSignin = useSelector(state => state.userSignin)
    console.log(data.activity.price)

    //handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!userSignin.userInfo) {
            swal({
                title: "Loguearse",
                text: "Para comprar esta actividad debes loguearte a tu cuenta!",
                icon: "info",
                buttons: true,
                dangerMode: false,
              })
              .then((willDelete) => {
                if (willDelete) {
                    dispatch(pendingPurchase(data.activity.id))
                    loginWithRedirect()
                }
              });
        } else {
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
                    dispatch(purchase(userSignin.userInfo.id, data.activity.id, "2021-08-17"))
                    swal({
                        title: "Felicitaciones!",
                        text: "Su compra ha sido realizada!",
                        icon: "success",
                        button: "Aceptar",
                        dangerMode: false
                      })
                } catch (error) {
                        swal({
                          title: "Atención!",
                          text: error.message,
                          icon: "info",
                          button: "Aceptar",
                          dangerMode: true
                        })
                }
            } else {
                
                swal({
                    title: "Atención!",
                    text: error.message,
                    icon: "info",
                    button: "Aceptar",
                    dangerMode: true
                  })
            }
        }

    }
    return (
        <div className="PayContainer">
            <h2>¡Reserva ahora!</h2>
            <div><>
                {!success ?
                    <form className="PayForm" onSubmit={handleSubmit}>
                        {/* <div className="reservation-label">
                            <label>¿Cuándo quieres iniciar tu aventura?</label>
                            <input className="reservation-input" type="date" ></input>
                        </div> */}
                        {/* <div className="reservation-label">
                            <label>¿Cuántas personas irán?</label>
                            <input className="reservation-input" type="number" min="0" max="99" ></input>
                        </div> */}
                        <fieldset className="FormGroup">
                            <div className="FormRow">
                                <CardElement />
                            </div>
                        </fieldset>
                        <button className='payButton'>PAGAR</button>
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


