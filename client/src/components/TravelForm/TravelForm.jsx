import React, { useState, useEffect } from "react"
import DinamicSearch from "../DinamicSearch/DinamicSearch"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
// import { connect } from 'react-redux'
// import { getFrom } from "../../store/actions/searchFlights"
import "./TravelForm.css"
import { detailFlight } from "../../store/actions/datailFlight";
import { getFlights } from "../../store/actions/getFlights"



export default function TravelForm(props) {
    const history = useHistory()
    const dispatch = useDispatch();

    const [way, setWay] = useState('');
    const [fromPlace, setFromPlace] = useState('');
    const [toPlace, setToPlace] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [classFlight, setClassFlight] = useState('');
    const [adults, setAdults] = useState('')
    const [kids, setKids] = useState('')
    const [babies, setBabies] = useState('')
    const [currency, setCurrency] = useState('');

    const airports0 = useSelector(state => state.from)
    const airports1 = useSelector(state => state.to)
    useEffect(() => {
        setFromPlace(airports0)
        setToPlace(airports1)
    }, [airports0, airports1])


    async function onSubmitFrom(e) {
        e.preventDefault()
        dispatch(detailFlight(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency))
        dispatch(getFlights(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency))
        history.push("/flights")
    }

    return (
        <div className="TravelFormContainer">
            <h1>Hola viajerx. A donde te gustaria ir?</h1>
            <div className="FormContainer">
                <form onSubmit={onSubmitFrom}>
                    <div className="DesdeHaciaContainer">
                        <div>
                            <form action="">
                                <label>Ida</label>
                                <input type="radio" value="onewaytrip" name="time" onChange={e => setWay(e.target.value)} />
                                <label>Ida y Vuelta</label>
                                <input type="radio" id="radioB1" name="time" value="roundtrip" onChange={e => setWay(e.target.value)} />
                            </form>
                            <h1 className="TextTravelForm">  DESDE : </h1>

                            <DinamicSearch id="0" />
                        </div>

                        {/* <h1 className="TextTravelForm">Hacia</h1> */}

                        <div>  <h1 className="TextTravelForm" > HACIA : </h1>
                            <DinamicSearch id="1" />

                        </div>
                    </div>

                    <div className="DesdeHastaContainer">
                        <div>
                            <h1 className="TextTravelForm">Desde</h1>
                            <input type="date" className="InputTravelForm" placeholder="Indique su fecha de partida" onChange={e => setFromDate(e.target.value)}></input>
                        </div>
                        <div>
                            <h1 className="TextTravelForm">Hasta</h1>
                            <input type="date" className="InputTravelForm" placeholder="Indique su fecha de llegada" onChange={e => setToDate(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="SelectTravelFormContainer">
                        <select className="SelectTravelForm" onChange={e => setClassFlight(e.target.value)}>
                            <option selected value="Economy">Economy</option>
                            <option value="Business">Business</option>
                            <option value="First">First</option>
                            <option value="PremiumEconomy">PremiumEconomy</option>
                        </select>
                    </div>
                </form>



                <div className="selectPassengers">
                    <label>Adultos</label>
                    <input type="number" min="1" max="10" onChange={e => setAdults(e.target.value)} />

                    <label>Ninos</label>
                    <input type="number" min="0" max="10" onChange={e => setKids(e.target.value)} />

                    <label>Bebes</label>
                    <input type="number" min="0" max="10" onChange={e => setBabies(e.target.value)} />
                </div>

                <div className="selectCurrency">
                    <label>Seleccione moneda</label>
                    <select onChange={e => setCurrency(e.target.value)}>
                        <option value="USD" >Dolar Estadounidense USD</option>
                        <option value="ARS" >Peso Argentino ARS</option>
                        <option value="COP" >Peso Colombiano COP</option>
                    </select>
                </div>
                <div className="FormTravelButtonContainer">
                    <button type="submit" className="FormTravelButton" onClick={onSubmitFrom} >Buscar</button>
                </div>
            </div>
        </div>
    )
}












