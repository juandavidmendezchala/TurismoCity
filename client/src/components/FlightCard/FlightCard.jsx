import React, {useEffect, useState} from 'react';
import logo from './logo-de-aerolineas-argentinas.png';
import './FlightCard.css'
import { getFlights } from '../../store/actions/getFlights';
import {connect} from 'react-redux';
import Segments from '../Segments/Segments';

function FlightCard(props){
    const [state,setState]=useState('');
    const [state2,setState2]=useState(false);

    useEffect(() => {
        props.getFlights();
    }, [])

    const segmentsFunction= function(id){
        
        setState(id);
        setState2(!state2);
        console.log(state);
        
    }
    console.log(state)
    console.log(props.flights)
    return (
        <div className='conteinerAllCard'>
            {props.flights?.map(flight =>{
                return(
                    <div className='contein'>
                    <div className='flightCard'>
                        <div className='InfoIda'>
                        <figure id='photo' data-title={flight.airlineIda.name} tooltip-dir="left">
                            <img src={flight.airlineIda.logo} alt={flight.airlineIda.name} height={40}/>
                        </figure>
                            <div className='horarioDestinoIda'>
                            {flight.vueloIda.stopoverCode!=='DIRECT'?(<p className='escalaTitulop'><a href="javascript:void(0)" className='escalaTitulo' onClick={()=>segmentsFunction(flight.vueloIda.id)}>{flight.vueloIda.segments.length-1} Escala{flight.vueloIda.segments.length>2?('s'):null}</a></p>):null}
                                <strong className='horarioIda'> {flight.vueloIda.departureTime}</strong><i className='line'> ------------------------</i><strong> {flight.vueloIda.arrivalTime}</strong>
                                <p className='destinoIda'>{flight.city1.name} ({flight.vueloIda.departureAirportCode})  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {flight.city2.name} ({flight.vueloIda.arrivalAirportCode})</p>
                            </div>
                        
                        </div>
                        {state===flight.vueloIda.id&&state2===true&&flight.vueloIda.stopoverCode!=='DIRECT'?(<Segments segmentos={flight.vueloIda.segments}/>):null}
                        <br/>
                        <br/>
                        <div className='InfoIda'>
                            <figure id='photo' data-title={flight.airlineVuelta.name} tooltip-dir="left">
                                <img src={flight.airlineVuelta.logo} alt={flight.airlineVuelta.name} height={40}/>
                            </figure>
                            <div className='horarioDestinoIda'>
                            {flight.vueloVuelta.stopoverCode!=='DIRECT'?(<p className='escalaTitulop'><a href="javascript:void(0)" className='escalaTitulo' onClick={()=>segmentsFunction(flight.vueloVuelta.id)}>{flight.vueloVuelta.segments.length-1} Escala{flight.vueloVuelta.segments.length>2?('s'):null}</a></p>):null}
                                <strong className='horarioIda'> {flight.vueloVuelta.departureTime}</strong><i className='line'> ------------------------</i><strong> {flight.vueloVuelta.arrivalTime}</strong>
                                <p className='destinoIda'>{flight.city2.name} ({flight.vueloVuelta.departureAirportCode})  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {flight.city1.name} ({flight.vueloVuelta.arrivalAirportCode})</p>
                            </div>
                        </div>
                        
                        {state===flight.vueloVuelta.id&&state2===true&&flight.vueloVuelta.stopoverCode!=='DIRECT'?(<Segments segmentos={flight.vueloVuelta.segments}/>):null}
    
                    </div>
                    <div className='reserve-box'>
                            <div className='price'>
                                <strong>PRICE: </strong>
                                <p>ARS$ {flight.linkRedireccion.price.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                            </div>
                                <a href={flight.linkRedireccion.handoffUrl} target="_blank" className='reserve'><button className='reservarVuelo'>RESERVAR</button></a>
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