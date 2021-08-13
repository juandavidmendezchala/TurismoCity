import React, { useEffect, useState } from 'react';
import './FlightCard.css'
import { getFlights } from '../../store/actions/getFlights';
import { connect } from 'react-redux';
import Segments from '../Segments/Segments';
import Pagination from '../Pagination/Pagination';
import FlightCardVuelta from '../FlightCardVuelta/FlightCardVuelta';
import image2 from './1315214.png';
import imageSorry from './sorry2.png';
import { StyledBall } from './Loading';

function FlightCard(props) {
    const [state, setState] = useState('');
    const [state2, setState2] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [loading, setLoading] = useState(false)

    useEffect(async () => {

        await props.getFlights({
            "way": props.way,
            "fromPlace": props.fromPlace,
            "toPlace": props.toPlace,
            "fromDate": props.fromDate,
            "toDate": props.toDate,
            "classFlight": props.classFlight,
            "adults": props.adults,
            "kids": props.kids,
            "babies": props.babies,
            "currency": props.currency,

        });
        setLoading(true);
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = props.flights?.slice(indexOfFirstPost, indexOfLastPost)
    const pagination = (pageNumber) => setCurrentPage(pageNumber)

    const segmentsFunction = function (id) {
        setState(id);
        setState2(!state2);
    }

    if (!loading) {
        return (
            <StyledBall>
                <div className="div_loading">
                    <img className="imgLoading" src={'https://media.giphy.com/media/elUMUuePOzH9WndXbc/giphy.gif'} alt="Loading" />
                    <p className="p">Cargando ...</p>
                </div>
                <div className="div_p">
                </div>
            </StyledBall>
        );
    }

    return (
        <div className='conteinerAllCard'>
            {props.flights === undefined ? (<div className='alert'>Lo sentimos, problemas con el servidor.<br /><br /><img src={imageSorry} height={200} /></div>) : null}
            {props.flights?.length === 1 && props.flights[0].message === "Campos invalidos" ? (<div className='alert'>Alguno de los campos llenados es inválido. Por favor vuelva a intentarlo<br /><br /><img src={image2} height={200} /></div>) : null}
            {props.flights?.length === 0 && props.way === 'roundtrip' ? (<div className='alert'>Se excedió el tiempo de busqueda o no hay vuelos que coincidan con esta búsqueda.<br /> Por favor, inténtalo nuevamente haciendo click aquí: <br /><br /><br /><a className='refresh' href={`http://localhost:3000/flights?way=${props.way}&fromPlace=${props.fromPlace}&toPlace=${props.toPlace}&fromDate=${props.fromDate}&toDate=${props.toDate}&classFlight=${props.classFlight}&adults=${props.adults}&kids=${props.kids}&babies=${props.babies}&currency=${props.currency}`}>&#128257;</a></div>) : null}
            {props.flights?.length === 0 && props.way === 'onewaytrip' ? (<div className='alert'>Se excedió el tiempo de busqueda o no hay vuelos que coincidan con esta búsqueda.<br /> Por favor, inténtalo nuevamente haciendo click aquí: <br /><br /><br /><a className='refresh' href={`http://localhost:3000/flights?way=${props.way}&fromPlace=${props.fromPlace}&toPlace=${props.toPlace}&fromDate=${props.fromDate}&classFlight=${props.classFlight}&adults=${props.adults}&kids=${props.kids}&babies=${props.babies}&currency=${props.currency}`}>&#128257;</a></div>) : null}
            {props.flights?.length === 1 && props.flights[0].message === "Your request quota has reached its maximum limits. Kindly upgrade to continue using it." ? (<div className='alert'>Lo sentimos, problemas con el servidor.<br /><br /><img src={imageSorry} height={200} /></div>) : null}
            {props.flights?.length === 1 && props.flights[0].message === "Something went wrong or key is invalid" ? (<div className='alert'>Alguno de los campos llenados es inválido. Por favor vuelva a intentarlo<br /><br /><img src={image2} height={200} /></div>) : null}
            {props.flights?.length > 1 ? (
                <div className='conteinerAllCard'>
                    {currentPosts?.map(flight => {
                        return (
                            <div className='contein'>
                                <div className='flightCard'>
                                    <div className='InfoIda'>

                                        <div className='IDAyVUELTA'>
                                            <strong>&nbsp;&nbsp;&nbsp;IDA&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                            <p className='escalaTitulo'> Duracion: {flight.vueloIda?.duration}</p>
                                        </div>
                                        <figure id='photo' data-title={flight.airlineIda?.name} tooltip-dir="left">
                                            <img src={flight.airlineIda?.logo} alt={flight.airlineIda?.name} height={40} />
                                        </figure>
                                        <div className='horarioDestinoIda'>
                                            {flight.vueloIda?.stopoverCode !== 'DIRECT' ? (<p className='escalaTitulop'><a href="javascript:void(0)" className='escalaTitulo'>{flight.vueloIda.segments?.length - 1} Escala{flight.vueloIda.segments?.length > 2 ? ('s') : null}</a></p>) : (<p className='escalaTitulo'>Directo</p>)}
                                            <strong className='horarioIda'> {flight.vueloIda.departureTime}</strong><i className='line'> ------------</i><span className='puntito' onClick={() => segmentsFunction(flight.vueloIda.id)}>{flight.vueloIda.stopoverCode !== 'DIRECT' ? ('◉') : null}</span><i className='line'>------------</i><strong> {flight.vueloIda.arrivalTime}</strong>
                                            <p className='destinoIda'>{flight.city1.name} ({flight.vueloIda.departureAirportCode})  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {flight.city2.name} ({flight.vueloIda.arrivalAirportCode})</p>

                                        </div>
                                    </div>
                                    {state === flight.vueloIda.id && state2 === true && flight.vueloIda.stopoverCode !== 'DIRECT' ? (<Segments segmentos={flight.vueloIda.segments} airports={flight.airports} cities={flight.cities} flight={flight.airlinesLogosIda} />) : null}
                                    {props.way === 'roundtrip' ? (<FlightCardVuelta flight={flight} />) : null}

                                </div>
                                <div className='reserve-box'>
                                    <div className='price'>
                                        <strong>PRECIO: </strong>
                                        <p>{flight.moneda}$ {flight.linkRedireccion.price.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                                    </div>
                                    <a href={flight.linkRedireccion.handoffUrl} target="_blank" className='reserve'><button className='reservarVuelo'>RESERVAR</button></a>


                                </div>
                            </div>
                        )
                    })}
                    <div>
                        {loading === true && props.flights?.length !== 0 && props.flights !== undefined ? (<Pagination postsPerPage={postsPerPage} totalPosts={props.flights?.length} paginate={pagination} />) : null}
                    </div>
                </div>

            ) : null}

        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        getFlights: flights => dispatch(getFlights(flights)),
    }
}
const mapStateToProps = state => {
    return {
        flights: state.listFlights.flights,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightCard)