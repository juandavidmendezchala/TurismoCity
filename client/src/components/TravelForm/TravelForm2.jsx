import React, { useState, useEffect } from "react"
import DinamicSearch from "../DinamicSearch/DinamicSearch2"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getFrom } from "../../store/actions/searchFlights"
// import "./TravelForm.css"
import "./TravelForm2.css"
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
        <div className="TravelFormContainer2">
            <div className="FormContainer2">
                <form className="ContainerForm2" noValidate autoComplete="off" onSubmit={onSubmitFrom}>
                    <div className="ContainerInfoVuelo2"><h3 className="InfoDeVuelo2">Info de vuelo</h3></div>
                    
                    <form className="RadioTravelForm2" action="">
                        <label className="LabelRadioTravelForm2">Ida</label>
                        <input required type="radio" value="onewaytrip" name="time" onChange={e => setWay(e.target.value)} />
                        <label className="LabelRadioTravelForm2"  >Ida y Vuelta</label>
                        <input required type="radio" id="radioB1" name="time" value="roundtrip" onChange={e => setWay(e.target.value)} />
                    </form>
                    <div className="DesdeHaciaContainer2">
                        <div className='DesdeContainer2'>
                            {/* <h1 className="TextTravelFormArriba2">De:</h1> */}
                            De: <DinamicSearch id="0" />
                        </div>
                        <div className='DesdeContainer2'>
                            {/* <h1 className="TextTravelFormArriba2" >A:</h1> */}
                            A: <DinamicSearch id="1" />
                        </div>
                    </div>
                    <div className='SegundoConteiner2'>
                    <div className="DesdeHastaContainer2">
                        <div>
                            <h1 className="TextTravelFormAbajo2">Desde:</h1>
                            <input type="date" icon='calendar alternate outline' iconPosition='left' placeholder='Indique fecha' className="InputTravelForm"
                                onChange={e => setFromDate(e.target.value)}
                            />

                        </div>
                        <div>
                            <h1 className="TextTravelFormAbajo2">Hasta:</h1>
                            <input type="date" icon='calendar alternate outline' iconPosition='left' placeholder='Indique fecha' className="InputTravelForm"
                                onChange={e => setToDate(e.target.value)}
                            />                        </div>
                    </div>

                    <div className="selectPassengers2">
                        <label className="LabelSelectPassengers2">Adultos</label>
                        <input className="InputSelectPassengers" type="number" min="1" max="10" onChange={e => setAdults(e.target.value)} />

                        <label className="LabelSelectPassengers2">Niños</label>
                        <input className="InputSelectPassengers" type="number" min="0" max="10" onChange={e => setKids(e.target.value)} />

                        <label className="LabelSelectPassengers2">Bebes</label>
                        <input className="InputSelectPassengers2" type="number" min="0" max="10" onChange={e => setBabies(e.target.value)} />
                    </div>
                    <div className="SelectTravelFormContainer2">
                        <label className="LabelSelectCurrency2">Seleccione clase</label>
                        <select className="SelectTravelForm2" onChange={e => setClassFlight(e.target.value)}>
                            <option selected value="Economy2">Economy</option>
                            <option value="Business2">Business</option>
                            <option value="First2">First</option>
                            <option value="PremiumEconomy2">PremiumEconomy</option>
                        </select>
                    </div>
                    <div className="selectCurrency2">
                        <label className="LabelSelectCurrency2">Seleccione moneda</label>
                        <select className="SelectCurrencySelect2" onChange={e => setCurrency(e.target.value)}>
                            <option value="USD" >Dolar Estadounidense USD</option>
                            <option value="ARS" >Peso Argentino ARS</option>
                            <option value="COP" >Peso Colombiano COP</option>
                        </select>
                    </div>
                    <div className="PositionButton2">
                        <Button inverted color='red' type="submit" onClick={onSubmitFrom}>
                            Buscar
                        </Button></div>
                    </div>
                </form>
                
            </div >
        </div>

    )
}