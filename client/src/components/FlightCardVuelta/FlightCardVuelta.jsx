import '../FlightCard/FlightCard.css'
import Segments from '../Segments/Segments';
import React, {useState} from 'react';

export default function FlightCardVuelta({flight}) {

    const [state, setState] = useState('');
    const [state2, setState2] = useState(false);

    const segmentsFunction = function (id) {
        setState(id);
        setState2(!state2);
        console.log(state);
    }  

    return (
        <div>
            <div className='InfoIda'>
                <div className='IDAyVUELTA'>
                    <strong>VUELTA</strong>
                    <p className='escalaTitulo'> Duracion: {flight.vueloVuelta.duration}</p>
                </div>
                <figure id='photo' data-title={flight.airlineVuelta.name} tooltip-dir="left">
                    <img src={flight.airlineVuelta.logo} alt={flight.airlineVuelta.name} height={40} />
                </figure>
                <div className='horarioDestinoIda'>
                    {flight.vueloVuelta.stopoverCode !== 'DIRECT' ? (<p className='escalaTitulop'><a href="javascript:void(0)" className='escalaTitulo' onClick={() => segmentsFunction(flight.vueloVuelta.id)}>{flight.vueloVuelta.segments.length - 1} Escala{flight.vueloVuelta.segments.length > 2 ? ('s') : null}</a></p>) : (<p className='escalaTitulo'>Directo</p>)}
                    <strong className='horarioIda'> {flight.vueloVuelta.departureTime}</strong><i className='line'> ------------</i><span className='puntito' onClick={() => segmentsFunction(flight.vueloVuelta.id)}>{flight.vueloVuelta.stopoverCode !== 'DIRECT' ? ('◉') : null}</span><i className='line'>------------</i><strong> {flight.vueloVuelta.arrivalTime}</strong>
                    <p className='destinoIda'>{flight.city2.name} ({flight.vueloVuelta.departureAirportCode})  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {flight.city1.name} ({flight.vueloVuelta.arrivalAirportCode})</p>

                </div>
            </div>

            {state === flight.vueloVuelta.id && state2 === true && flight.vueloVuelta.stopoverCode !== 'DIRECT' ? (<Segments segmentos={flight.vueloVuelta.segments} airports={flight.airports} cities={flight.cities} flight={flight.airlinesLogosVuelta} />) : null}

        </div>
    )
}


