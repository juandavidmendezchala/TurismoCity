import React from 'react';
import './ActivitiesReservation.css'

export default function ActivitiesReservation() {
    return(
        <div>
            <h2>¡Reserva ahora!</h2>
            <div>
                <form >
                <div className="reservation-label">
                    <label>¿Cuándo quieres iniciar tu aventura?</label>
                    <input type="date" ></input>
                </div>
                <div className="reservation-label">
                    <label>¿Cuántas personas irán?</label>
                    <input type="number" min="0" max="99" ></input>
                </div>
                </form>
            </div>

        </div>
    )
}