import React from 'react';
import './Segmentos.css'


export default function Segments(props) {
    console.log(props)

    const getCity = (airportCode) => {
        var airport = props.airports?.find(airport => airport.code === airportCode)
        var city = props.cities?.find(city => city.code === airport.cityCode)
        return city.name;
    }

    return (
        <div className='TarjetaSegmentos'>
            <div className='encabezadoSegmentos'> Detalle Tramos: </div>
            {props.segmentos?.map((segmento, index) => {
                return (
                    <div className='segmentosBox'>
                        <figure id='photo' data-title={props.flight[index].name} tooltip-dir="left">
                            <img src={props.flight[index].logo} alt={props.flight[index].name} height={40} />
                        </figure>
                        <div>
                            <p className='escalaTitulo'> Duracion: {Math.floor(segmento.durationMinutes/60)}h {Math.ceil(((segmento.durationMinutes/60)-Math.floor(segmento.durationMinutes/60))*60)}min </p>
                            <strong className='horarioIda'> {segmento.departureDateTime.slice(11, 16)}</strong><i className='line'> ------------------------</i><strong> {segmento.arrivalDateTime.slice(11, 16)}</strong>
                            <p className='destinoIda'>{getCity(segmento.departureAirportCode)} ({segmento.departureAirportCode})  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {getCity(segmento.arrivalAirportCode)} ({segmento.arrivalAirportCode})</p>
                        </div>
                        <br />
                    </div>

                )
            })}

        </div>
    )

}