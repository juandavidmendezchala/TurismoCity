import React, {useEffect} from 'react';
import logo from './logo-de-aerolineas-argentinas.png';
import './FlightCard.css'
import { getFlights } from '../../store/actions/getFlights';
import {connect} from 'react-redux';


function FlightCard(props){

    useEffect(() => {
        props.getFlights();

    }, [])
    console.log(props.flights)
    return (
        <div className='conteinerAllCard'>
            {props.flights?.map(flight =>{
                return(
                    <div className='contein'>
                    <div className='flightCard'>
                        <div className='InfoIda'>
                            <img src={logo} alt='Aerolineas Argentinas' height={40}/>
                            <div className='horarioDestinoIda'>
                                <strong className='horarioIda'> {flight.vueloIda.departureTime}</strong><i className='line'> ------------------------</i><strong> {flight.vueloIda.arrivalTime}</strong>
                                <p className='destinoIda'>{flight.vueloIda.departureAirportCode} - {flight.vueloIda.arrivalAirportCode}</p>
                            </div>
                            
                        </div>
                        <br/>
                        <br/>
                        <div className='InfoIda'>
                            <img src={logo} alt='Aerolineas Argentinas' height={40}/>
                            <div className='horarioDestinoIda'>
                                <strong className='horarioIda'> {flight.vueloVuelta.departureTime}</strong><i className='line'> ------------------------</i><strong> {flight.vueloVuelta.arrivalTime}</strong>
                                <p className='destinoIda'>{flight.vueloVuelta.departureAirportCode} - {flight.vueloVuelta.arrivalAirportCode}</p>
                            </div>
                        </div>
                        
    
                    </div>
                    <div className='reserve-box'>
                            <div className='price'>
                                <strong>PRICE: </strong>
                                <p>${flight.linkRedireccion.price.totalAmount}</p>
                            </div>
                                <a href={flight.linkRedireccion.handoffUrl} target="_blank" className='reserve'><button>RESERVAR</button></a>
                            </div>
                    </div>
                )
            })}
           
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        getFlights: flights => dispatch(getFlights(flights))
    }
}
const mapStateToProps = state => {
    return {
        flights: state.flights
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightCard)