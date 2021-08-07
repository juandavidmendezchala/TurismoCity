import React, { useState, useEffect } from "react"
import DinamicSearch from "../DinamicSearch/DinamicSearch"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getFrom } from "../../store/actions/searchFlights"
import "./TravelForm.css"
import { Button, Radio } from 'semantic-ui-react'
import logoAerolineas from "./Imagenes/Argentina.png"
import logoAmerican from "./Imagenes/American.png"
import logoFrance from "./Imagenes/France.png"
import logoNew from "./Imagenes/New.png"
import logoUnited from "./Imagenes/United.png"
import logoBritish from "./Imagenes/British.png"
import { detailFlight } from "../../store/actions/datailFlight";
import { getFlights } from "../../store/actions/getFlights"



export default function TravelForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();

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

    const airports0 = useSelector(state => state.listFlights.from)
    const airports1 = useSelector(state => state.listFlights.to)
    useEffect(() => {
        setFromPlace(airports0)
        setToPlace(airports1)
    }, [airports0, airports1])
    const prueba = useSelector(state => state)

    async function onSubmitFrom(e) {
        e.preventDefault()
        dispatch(detailFlight(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency))
        console.log(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency)
        await dispatch(getFlights(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency))
        history.push("/flights")
    }

    return (
        <div className="TravelFormContainer">
            <h2 className="TitleHome">Hola, viajeros. ¿A dónde les gustaría ir? </h2>
            <div className="FormContainer">
                <form className="ContainerForm" noValidate autoComplete="off" onSubmit={onSubmitFrom}>
                    <div className="DesdeHaciaContainer">
                        <div>
                            <h1 className="TextTravelFormArriba">De:</h1>
                            <DinamicSearch id="0" />
                        </div>
                        <div>
                            <h1 className="TextTravelFormArriba" >A:</h1>
                            <DinamicSearch id="1" />
                        </div>
                    </div>
                    <form className="RadioTravelForm" action="">
                        <label className="LabelRadioTravelForm">Ida</label>
                        <input type="radio" value="onewaytrip" name="time" onChange={e => setWay(e.target.value)} />
                        <label className="LabelRadioTravelForm"  >Ida y Vuelta</label>
                        <input type="radio" id="radioB1" name="time" value="roundtrip" onChange={e => setWay(e.target.value)} />
                    </form>
                    <div className="DesdeHastaContainer">
                        <div>
                            <h1 className="TextTravelFormAbajo">Desde:</h1>
                            <input type="date" className="InputTravelForm" placeholder="Indique su fecha de partida" onChange={e => setFromDate(e.target.value)}></input>
                        </div>
                        <div>
                            <h1 className="TextTravelFormAbajo">Hasta:</h1>
                            <input type="date" className="InputTravelForm" placeholder="Indique su fecha de regreso" onChange={e => setToDate(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="selectPassengers">
                        <label>Adultos</label>
                        <input type="number" min="1" max="10" onChange={e => setAdults(e.target.value)} />

                        <label>Ninos</label>
                        <input type="number" min="0" max="10" onChange={e => setKids(e.target.value)} />

                        <label>Bebes</label>
                        <input type="number" min="0" max="10" onChange={e => setBabies(e.target.value)} />
                    </div>
                    <div className="SelectTravelFormContainer">
                        <select className="SelectTravelForm" onChange={e => setClassFlight(e.target.value)}>
                            <option selected value="Economy">Economy</option>
                            <option value="Business">Business</option>
                            <option value="First">First</option>
                            <option value="PremiumEconomy">PremiumEconomy</option>
                        </select>
                    </div>
                    <div className="selectCurrency">
                        <label>Seleccione moneda</label>
                        <select onChange={e => setCurrency(e.target.value)}>
                            <option value="USD" >Dolar Estadounidense USD</option>
                            <option value="ARS" >Peso Argentino ARS</option>
                            <option value="COP" >Peso Colombiano COP</option>
                        </select>
                    </div>
                    <div className="PositionButton">
                        <Button inverted color='red' type="submit" onClick={onSubmitFrom}>
                            Buscar
                        </Button></div>
                </form>
                <div className="PublicityContainer">
                    <h3 className="TextAirlines">Trabajamos con más de 300 socios para ofrecerte las mejores ofertas de viaje</h3>
                    <div className="AcomodoImg">
                        <img className="LogoAerolineas" src={logoAmerican} alt="American Airlines" />
                        <img className="LogoAerolineas" src={logoAerolineas} alt="Aerolineas Argentinas" />
                        <img className="LogoAerolineas" src={logoBritish} alt="British Airlines" />
                        <img className="LogoAerolineas" src={logoFrance} alt="France Airlines" />
                        <img className="LogoAerolineas" src={logoNew} alt="New Zealand Airlines" />
                        <img className="LogoAerolineas" src={logoUnited} alt="United Airlines" />
                    </div>
                </div>
            </div >
        </div>

    )
}