import React from 'react';
import {Link} from 'react-router-dom'
import './ActivitiesReservation.css'

export default function ActivitiesReservation() {

    return(
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
                </form>
            </div>

        </div>
    )
}