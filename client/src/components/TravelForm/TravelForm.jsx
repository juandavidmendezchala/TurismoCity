import React, { useState, useEffect } from "react"
import DinamicSearch from "../DinamicSearch/DinamicSearch"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getFrom } from "../../store/actions/searchFlights"
import "./TravelForm.css"
import { Button, Input } from 'semantic-ui-react'
import logoAerolineas from "./Imagenes/Argentina.png"
import logoAmerican from "./Imagenes/American.png"
import logoFrance from "./Imagenes/France.png"
import logoNew from "./Imagenes/New.png"
import logoUnited from "./Imagenes/United.png"
import logoBritish from "./Imagenes/British.png"
import { detailFlight } from "../../store/actions/datailFlight";
import { getFlights } from "../../store/actions/getFlights"
import { resetFlights } from "../../store/actions/resetFlights";
// import 'semantic-ui-css/semantic.min.css'


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

    useEffect(()=>{
        dispatch(resetFlights())
    },[])

    const prueba = useSelector(state => state)

    function onSubmitFrom(e) {
        e.preventDefault()
        dispatch(detailFlight(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency))
        console.log(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency)
        dispatch(getFlights({way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency}))
        if(way==='roundtrip') history.push(`/flights?way=${way}&fromPlace=${fromPlace}&toPlace=${toPlace}&fromDate=${fromDate}&toDate=${toDate}&classFlight=${classFlight}&adults=${adults}&kids=${kids}&babies=${babies}&currency=${currency}`)
        if(way==='onewaytrip') history.push(`/flights?way=${way}&fromPlace=${fromPlace}&toPlace=${toPlace}&fromDate=${fromDate}&classFlight=${classFlight}&adults=${adults}&kids=${kids}&babies=${babies}&currency=${currency}`)
    }

    return (
        <div className="TravelFormContainer">
            <h2 className="TitleHome">Hola, viajeros. ¿A dónde les gustaría ir? </h2>
            <div className="FormContainer">
                <form className="ContainerForm" noValidate autoComplete="off" onSubmit={onSubmitFrom}>
                    <div className="ContainerInfoVuelo"><h3 className="InfoDeVuelo">Info de vuelo</h3></div>
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
                        <input required type="radio" value="onewaytrip" name="time" onChange={e => setWay(e.target.value)} />
                        <label className="LabelRadioTravelForm"  >Ida y Vuelta</label>
                        <input required type="radio" id="radioB1" name="time" value="roundtrip" onChange={e => setWay(e.target.value)} />
                    </form>
                    <div className="DesdeHastaContainer">
                        <div>
                            <h1 className="TextTravelFormAbajo">Desde:</h1>
                            <Input type="date" icon='calendar alternate outline' iconPosition='left' placeholder='Indique fecha' className="InputTravelForm"
                                nChange={e => setFromDate(e.target.value)}
                            />

                        </div>
                        <div>
                            <h1 className="TextTravelFormAbajo">Hasta:</h1>
                            <Input type="date" icon='calendar alternate outline' iconPosition='left' placeholder='Indique fecha' className="InputTravelForm"
                                nChange={e => setToDate(e.target.value)}
                            />                        </div>
                    </div>
                    <div className="selectPassengers">
                        <label className="LabelSelectPassengers">Adultos</label>
                        <input className="InputSelectPassengers" type="number" min="1" max="10" onChange={e => setAdults(e.target.value)} />

                        <label className="LabelSelectPassengers">Niños</label>
                        <input className="InputSelectPassengers" type="number" min="0" max="10" onChange={e => setKids(e.target.value)} />

                        <label className="LabelSelectPassengers">Bebes</label>
                        <input className="InputSelectPassengers" type="number" min="0" max="10" onChange={e => setBabies(e.target.value)} />
                    </div>
                    <div className="SelectTravelFormContainer">
                        <label className="LabelSelectCurrency">Seleccione clase</label>
                        <select className="SelectTravelForm" onChange={e => setClassFlight(e.target.value)}>
                            <option selected value="Economy">Economy</option>
                            <option value="Business">Business</option>
                            <option value="First">First</option>
                            <option value="PremiumEconomy">PremiumEconomy</option>
                        </select>
                    </div>
                    <div className="selectCurrency">
                        <label className="LabelSelectCurrency">Seleccione moneda</label>
                        <select className="SelectCurrencySelect" onChange={e => setCurrency(e.target.value)}>
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
                        <div className="PrimerasDos">
                            <img className="LogoAerolineasAmerican" src={logoAmerican} alt="American Airlines" />
                            <img className="LogoAerolineasArgentina" src={logoAerolineas} alt="Aerolineas Argentinas" />
                        </div>
                        <div className="PrimerasDos">
                            <img className="LogoAerolineasUnited" src={logoUnited} alt="United Airlines" />
                            <img className="LogoAerolineasFrance" src={logoFrance} alt="France Airlines" />
                        </div>
                        <div className="PrimerasDos">
                            <img className="LogoAerolineasBritish" src={logoBritish} alt="British Airlines" />
                            <img className="LogoAerolineasNew" src={logoNew} alt="New Zealand Airlines" />
                        </div>

                    </div>
                    <div className="Subiteaeseavion">
                    </div>
                </div>
            </div >
        </div>

    )
}