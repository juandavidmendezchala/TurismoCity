import React from 'react'
import logo from './logo-de-aerolineas-argentinas.png';
import './FlightCard.css'


export default function FlightCard(){
//de la busqueda recibo:


    return (
        <div className='conteinerAllCard'>
           <div className='flightCard'>
            <div className='InfoIda'>
                <img src={logo} alt='Aerolineas Argentinas' height={40}/>
                <div className='horarioDestinoIda'>
                    <strong className='horarioIda'> 20:05 - 21:20</strong>
                    <p className='destinoIda'>COR/AEROP ING. - BUE/AEP</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className='InfoIda'>
                <img src={logo} alt='Aerolineas Argentinas' height={40}/>
                <div className='horarioDestinoIda'>
                    <strong className='horarioIda'> 20:05 - 21:20</strong>
                    <p className='destinoIda'>COR/AEROP ING. - BUE/AEP</p>
                </div>
            </div>
            </div>
        </div>
    )

}