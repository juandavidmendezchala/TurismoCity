import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { connect } from 'react-redux'
import { getFrom } from "../../store/actions/searchFlights"
import "./TravelForm.css"
import { Button, Radio } from 'semantic-ui-react'
import logoAerolineas from "./Imagenes/Argentina.png"
import logoAmerican from "./Imagenes/American.png"
import logoFrance from "./Imagenes/France.png"
import logoNew from "./Imagenes/New.png"
import logoUnited from "./Imagenes/United.png"
import logoBritish from "./Imagenes/British.png"




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
            <h2 className="TitleHome">Hola, viajeros. ¿A dónde les gustaría ir? </h2>
            <div className="FormContainer">
                <form className="ContainerForm" noValidate autoComplete="off" onSubmit={onSubmitFrom}>
                    <div className="DesdeHaciaContainer">
                        <div>
                            <h1 className="TextTravelFormArriba">De:</h1>
                            <input className="DesdeInput" type="search" id="outlined-basic" label="Desde" variant="outlined" value={airport.from} name="from" placeholder="Elige una ciudad o aeropuerto" onChange={handleChangeAirport} />
                        </div>
                        <div>  <h1 className="TextTravelFormArriba" >A:</h1>
                            <input className="DesdeInput" type="search" id="outlined-basic" label="Desde" variant="outlined" value={airportArrival.to} name="to" placeholder="Elige una ciudad o aeropuerto" onChange={handleChangeAirportArrival} />
                        </div>
                    </div>
                    <div className="DesdeHastaContainer">
                        <div>
                            <h1 className="TextTravelFormAbajo">Desde:</h1>
                            <input type="date" className="InputTravelForm" placeholder="Indique su fecha de partida"></input>
                        </div>
                        <div>
                            <h1 className="TextTravelFormAbajo">Hasta:</h1>
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
                    <div className="PositionButton">
                        <Button inverted color='red'>
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

const mapDispatchToProps = (dispatch) => {
    return {
        getFrom: from => dispatch(getFrom(from))
    }
}

export default connect(null, mapDispatchToProps)(TravelForm)


