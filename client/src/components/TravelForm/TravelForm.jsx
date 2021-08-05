
import React, { useState } from "react"
import DinamicSearch from "../DinamicSearch/DinamicSearch"
import DinamicTo from '../DinamicSearch/DynamicTo'
import { useDispatch } from "react-redux"
import "./TravelForm.css"
import { detailFlight } from "../../store/actions/detailFlight";



export default function TravelForm(props) {

    const dispatch = useDispatch();

    const [way, setWay] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [classFlight, setClassFlight] = useState('');
    const [adults, setAdults] = useState('');
    const [kids, setKids] = useState('');
    const [babies, setBabies] = useState('');
    const [currency, setcurrency] = useState('USD');


    function onSubmitFrom(e) {
        e.preventDefault()
        dispatch(detailFlight(
            fromDate, 
            toDate, 
            classFlight, 
            adults, 
            kids, 
            babies, 
            currency))
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

                            <DinamicSearch />
                        </div>

                        {/* <h1 className="TextTravelForm">Hacia</h1> */}

                        <div>  <h1 className="TextTravelForm" > HACIA : </h1>
                            <DinamicTo />

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
                    <div className="SelectTravelFormContainer"> Categoría
                        <select className="SelectTravelForm" onChange={e => setClassFlight(e.target.value)}>
                            <option selected value="Economy">Economy</option>
                            <option value="Business">Business</option>
                            <option value="First">First</option>
                            <option value="PremiumEconomy">PremiumEconomy</option>
                        </select>
                    </div>

                    <div className="SelectTravelFormContainer"> Adultos  
                        <select className="SelectTravelForm" onChange={e => setAdults(e.target.value)}> 
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        Niños  
                        <select className="SelectTravelForm" onChange={e => setKids(e.target.value)}> 
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        Bebés
                        <select className="SelectTravelForm" onChange={e => setBabies(e.target.value)}>
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>



                    <div className="FormTravelButtonContainer">
                        <button type="submit" className="FormTravelButton" onClick={onSubmitFrom} >Buscar</button>
                    </div>
                </form>
            </div>

        </div >
    )
}

