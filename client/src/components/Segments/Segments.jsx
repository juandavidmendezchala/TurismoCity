import React, {useEffect} from 'react';
import './Segmentos.css'
import { getFlights } from '../../store/actions/getFlights';
import {connect} from 'react-redux';

export default function Segments(props){
 console.log(props)
    return (
        <div className='TarjetaSegmentos'>
            <div className='encabezadoSegmentos'> Detalle Tramos: </div>
            {props.segmentos?.map((segmento,indice) =>
                {return (
                    <div className='segmentosBox'>
                        <figure id='photo' data-title={props.flight[indice].name} tooltip-dir="left">
                                <img src={props.flight[indice].logo} alt={props.flight[indice].name} height={40}/>
                        </figure>
                        <div>
                            <strong className='horarioIda'> {segmento.departureDateTime.slice(11,16)}</strong><i className='line'> ------------------------</i><strong> {segmento.arrivalDateTime.slice(11,16)}</strong>
                            <p className='destinoIda'>{"CIUDAD"} ({segmento.departureAirportCode})  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"CIUDAD 2"} ({segmento.arrivalAirportCode})</p>
                        </div>
                        <br/>
                    </div>
                    
                )
                })}
            
            {/* {props.segmentos.map(flight =>{
                return(
                    <div className='contein'>
                    <div className='flightCard'>
                        <div className='InfoIda'>
                        <figure id='photo' data-title={flight.airlineCode} tooltip-dir="left">
                            <img src={flight.airlineIda.logo} alt={flight.airlineIda.name} height={40}/>
                        </figure>
                            <div className='horarioDestinoIda'>
                                <strong className='horarioIda'> {flight.vueloIda.departureDateTime}</strong><i className='line'> ------------------------</i><strong> {flight.arrivalDateTime}</strong>
                                <p className='destinoIda'>{"NOMBRE DE LA CIUDAD"} ({flight.departureAirportCode})  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"NOMBRE CIUDAD 2"} ({flight.arrivalAirportCode})</p>
                            </div>
                            
                        </div>                     
                    </div>
                    </div>
                )
            })} */}
            
           
        </div>
    )

}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getFlights: flights => dispatch(getFlights(flights))
//     }
// }
// const mapStateToProps = state => {
//     return {
//         flights: state.flights
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Segments)