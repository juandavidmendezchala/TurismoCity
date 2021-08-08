import React, { useEffect, useState } from 'react';
import logo from './logo-de-aerolineas-argentinas.png';
import './FlightCard.css'
import { getFlights } from '../../store/actions/getFlights';
import { connect } from 'react-redux';
import Segments from '../Segments/Segments';
import Pagination from '../Pagination/Pagination';

function FlightCard(props) {
    const [state, setState] = useState('');
    const [state2, setState2] = useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage] = useState(10);
    // const [loding, setLoding] = useState(false)


    useEffect(() => {
        
        // setLoding(true);
        props.getFlights({
            "fromPlace":props.fromPlace,
            "toPlace":props.toPlace,
            "fromDate":props.fromDate,
            "toDate":props.toDate,
            "classFlight":props.classFlight,
            "adults":props.adults,
            "kids":props.kids,
            "babies":props.babies,
            "currency":props.currency,});

    }, [])
    console.log(props);


    const indexOfLastPost = currentPage*postsPerPage;
    const indexOfFirstPost = indexOfLastPost-postsPerPage;
    const currentPosts = props.flights?.slice(indexOfFirstPost,indexOfLastPost)
    const pagination= (pageNumber) => setCurrentPage(pageNumber)
    const segmentsFunction = function (id) {

        setState(id);
        setState2(!state2);
        console.log(state);

    }  
    
    return (
        <div className='conteinerAllCard'>
            {/* {loding === false ? (<img src='https://media.giphy.com/media/IdmhVqdlIvpj3EalKg/giphy.gif' type='gif' />) : null} */}
            {currentPosts?.map(flight => {
                return (
                    <div className='contein'>
                        <div className='flightCard'>
                            <div className='InfoIda'>

                                <div className='IDAyVUELTA'>
                                    <strong>&nbsp;&nbsp;&nbsp;IDA&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                    <p className='escalaTitulo'> Duracion: {flight.vueloIda.duration}</p>
                                </div>
                                <figure id='photo' data-title={flight.airlineIda.name} tooltip-dir="left">
                                    <img src={flight.airlineIda.logo} alt={flight.airlineIda.name} height={40} />
                                </figure>
                                <div className='horarioDestinoIda'>
                                    {flight.vueloIda.stopoverCode !== 'DIRECT' ? (<p className='escalaTitulop'><a href="javascript:void(0)" className='escalaTitulo'>{flight.vueloIda.segments.length - 1} Escala{flight.vueloIda.segments.length > 2 ? ('s') : null}</a></p>) : (<p className='escalaTitulo'>Directo</p>)}
                                    <strong className='horarioIda'> {flight.vueloIda.departureTime}</strong><i className='line'> ------------</i><span className='puntito' onClick={() => segmentsFunction(flight.vueloIda.id)}>{flight.vueloIda.stopoverCode !== 'DIRECT' ? ('◉') : null}</span><i className='line'>------------</i><strong> {flight.vueloIda.arrivalTime}</strong>
                                    <p className='destinoIda'>{flight.city1.name} ({flight.vueloIda.departureAirportCode})  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {flight.city2.name} ({flight.vueloIda.arrivalAirportCode})</p>
                                    {/* <span className='escalaTitulo'> Duracion: {flight.vueloIda.duration}</span> */}
                                </div>
                            </div>
                            {state === flight.vueloIda.id && state2 === true && flight.vueloIda.stopoverCode !== 'DIRECT' ? (<Segments segmentos={flight.vueloIda.segments} airports={flight.airports} cities={flight.cities} flight={flight.airlinesLogosIda} />) : null}

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
                                    {/* <span className='escalaTitulo'> Duracion: {flight.vueloVuelta.duration}</span> */}
                                </div>
                            </div>

                            {state === flight.vueloVuelta.id && state2 === true && flight.vueloVuelta.stopoverCode !== 'DIRECT' ? (<Segments segmentos={flight.vueloVuelta.segments} airports={flight.airports} cities={flight.cities} flight={flight.airlinesLogosVuelta} />) : null}

                        </div>
                        <div className='reserve-box'>
                            <div className='price'>
                                <strong>PRECIO: </strong>
                                <p>{flight.moneda}$ {flight.linkRedireccion.price.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                            </div>
                            <a href={flight.linkRedireccion.handoffUrl} target="_blank" className='reserve'><button className='reservarVuelo'>RESERVAR</button></a>
                            {/* <img className='flightGif'src='https://media.giphy.com/media/IdmhVqdlIvpj3EalKg/giphy.gif' type='gif'width={90} height={90}/> */}

                        </div>
                    </div>
                )
            })}
            <div>
                <Pagination postsPerPage={postsPerPage} totalPosts={props.flights?.length} paginate={pagination}/>
            </div>
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
        flights: state.listFlights.flights
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightCard)