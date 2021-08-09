import React, { useState, useEffect } from "react"
import DinamicSearch from "../DinamicSearch/DinamicSearch"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getFrom } from "../../store/actions/searchFlights"

import "./TravelForm.css"

import { Button, Input } from 'semantic-ui-react'

import logoAerolineas from "./Imagenes/Argentina.png"
// @ts-ignore
import logoAmerican from "./Imagenes/American.png"
// @ts-ignore
import logoFrance from "./Imagenes/France.png"
// @ts-ignore
import logoNew from "./Imagenes/New.png"
// @ts-ignore
import logoUnited from "./Imagenes/United.png"
// @ts-ignore
import logoBritish from "./Imagenes/British.png"
import { detailFlight } from "../../store/actions/datailFlight";
import { getFlights } from "../../store/actions/getFlights"
import 'semantic-ui-css/semantic.min.css'


export default function TravelForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [way, setWay] = useState('');
    const [fromPlace, setFromPlace] = useState('');
    const [toPlace, setToPlace] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [classFlight, setClassFlight] = useState('');
    const [adults, setAdults] = useState('0')
    const [kids, setKids] = useState('0')
    const [babies, setBabies] = useState('0')
    const [currency, setCurrency] = useState('USD');
    const [errorClass, setErrorClass] = useState('');

    const airports0 = useSelector(state => state.listFlights.from)
    const airports1 = useSelector(state => state.listFlights.to)
    useEffect(() => {
        setFromPlace(airports0)
        setToPlace(airports1)
    }, [airports0, airports1])
    // const prueba = useSelector(state => state)

    async function onSubmitFrom(e) {
        e.preventDefault()
        dispatch(detailFlight(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency))
        console.log(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency)

        await dispatch(getFlights(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency))
        history.push("/flights")

    }
    // const valAirports = (value) => {
    //     if (value.length < 1) {
    //         setError('Set al list one passanger')
    //     } else {
    //         setError('')
    //     }
    //     setFromPlace(airports0)
    // }
    const valClass = (value) => {
        if (value.length < 1) {
            setErrorClass('Set your category')
        } else {
            setErrorClass('')
        }
        setClassFlight(value)
    }
    var today = new Date().toISOString().split('T')[0];


    // console.log(today)



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
                    <form className="RadioTravelForm" action="" >
                        <label className="LabelRadioTravelForm">Ida</label>
                        <input required type="radio" value="onewaytrip" name="time" onChange={e => setWay(e.target.value)} />
                        <label className="LabelRadioTravelForm"  >Ida y Vuelta</label>
                        <input required type="radio" id="radioB1" name="time" value="roundtrip" onChange={e => setWay(e.target.value)} />
                    </form>
                    <div className="DesdeHastaContainer">
                        <div>
                            <h1 className="TextTravelFormAbajo">Desde:</h1>

                            <input type="date" name={today} min={today} className="InputTravelForm" placeholder="Indique su fecha de partida" onChange={e => setFromDate(e.target.value)} required></input>
                        </div>
                        <div>
                            <h1 className={(way === "onewaytrip") ? 'danger' : 'TextTravelFormAbajo'}>Hasta:</h1>
                            <input type="date" min={fromDate} className={(way === "onewaytrip") ? 'danger' : 'InputTravelForm'} placeholder="Indique su fecha de regreso" onChange={e => setToDate(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="selectPassengers">
                        <label>Adultos</label>
                        <input type="number" required placeholder="0" min="1" max="10" onChange={e => setAdults(e.target.value)} />

                        <label>Ninos</label>
                        <input type="number" required placeholder="0" min="0" max="10" onChange={e => setKids(e.target.value)} />

                        <label>Bebes</label>
                        <input type="number" required placeholder="0" min="0" max="10" onChange={e => setBabies(e.target.value)} />

                    </div>
                    <div className="SelectTravelFormContainer">
                        <select className="SelectTravelForm" required onChange={(e) => { e.preventDefault(); valClass(e.target.value) }} >
                            <option selected value="">Select a category</option>
                            <option value="Economy">Economy</option>
                            <option value="Business">Business</option>
                            <option value="First">First</option>
                            <option value="PremiumEconomy">PremiumEconomy</option>
                        </select>
                        {(!errorClass) ? null : <span className="errorClass"> {errorClass}</span>}
                    </div>
                    <div className="selectCurrency">
                        <label className="LabelSelectCurrency">Seleccione moneda</label>
                        <select className="SelectCurrencySelect" required onChange={e => setCurrency(e.target.value)}>
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