import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { connect } from 'react-redux'
import { getFrom } from "../../store/actions/searchFlights"
import "./TravelForm.css"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';



const TravelForm = (props) => {
    const dispatch = useDispatch();

    const [airport, setAirport] = useState({
        from: ""
    })
    const [airportArrival, setAirportArrival] = useState({
        to: ""
    })

    function handleChangeAirport(e) {
        setAirport({
            [e.target.name]: e.target.value
        })
    };
    function handleChangeAirportArrival(e) {
        setAirportArrival({
            [e.target.name]: e.target.value
        })
    };

    function onSubmitFrom(e) {
        e.preventDefault()
        console.log(airport.from)
        props.getFrom(airport.from)
        alert("funciono")
    }

    return (
        <div className="TravelFormContainer">
            <h1>Hola viajerx. A donde te gustaria ir?</h1>
            <div className="FormContainer">
                <form className="ContainerForm" noValidate autoComplete="off" onSubmit={onSubmitFrom}>
                    <div className="DesdeHaciaContainer">
                        <div>
                            <h1 className="TextTravelForm">  DESDE : </h1>
                            <TextField className="DesdeInput" type="search" id="outlined-basic" label="Desde" variant="outlined" value={airport.from} name="from" onChange={handleChangeAirport} />

                        </div>
                        <div>  <h1 className="TextTravelForm" > HACIA : </h1>
                            <TextField className="DesdeInput" type="search" id="outlined-basic" label="Desde" variant="outlined" value={airportArrival.to} name="to" onChange={handleChangeAirportArrival} />
                        </div>
                    </div>
                    <form action="">
                        <label>Ida</label>
                        <input type="radio" value="onewaytrip" name="time" />
                        <label>Ida y Vuelta</label>
                        <input type="radio" id="radioB1" name="time" value="roundtrip" checked='true' />
                    </form>
                    <div className="DesdeHastaContainer">
                        <div>
                            <h1 className="TextTravelForm">Desde</h1>
                            <input type="date" className="InputTravelForm" placeholder="Indique su fecha de partida"></input>
                        </div>
                        <div>
                            <h1 className="TextTravelForm">Hasta</h1>
                            <input type="date" className="InputTravelForm" placeholder="Indique su fecha de llegada"></input>
                        </div>
                    </div>
                    <div className="SelectTravelFormContainer">
                        <select className="SelectTravelForm">
                            <option selected value="Economy">Economy</option>
                            <option value="Business">Business</option>
                            <option value="First">First</option>
                            <option value="PremiumEconomy">PremiumEconomy</option>
                        </select>
                    </div>
                    <div className="FormTravelButtonContainer">
                        <Button variant="contained" color="secondary" type="submit" onSubmit={onSubmitFrom}>
                            Buscar
                        </Button>
                    </div>
                </form>

            </div>

        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFrom: from => dispatch(getFrom(from))
    }
}

export default connect(null, mapDispatchToProps)(TravelForm)