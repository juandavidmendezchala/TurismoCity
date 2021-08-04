import React from "react"
import DinamicSearch from "../DinamicSearch/DinamicSearch"
import "./TravelForm.css"







const TravelForm = () => {
    return (
        <div className="TravelFormContainer">
            <h1>Hola viajerx. A donde te gustaria ir?</h1>
            <div className="FormContainer">
                <div className="DesdeHaciaContainer">
                <div>  <h1 className="TextTravelForm">  DESDE : </h1>
              
                    <DinamicSearch />
              </div> 
                    
                        {/* <h1 className="TextTravelForm">Hacia</h1> */}

                        <div>  <h1 className="TextTravelForm" > HACIA : </h1>
                        <DinamicSearch />
              </div> 
                </div>
             
                <div className="DesdeHastaContainer">
                <div>
                        <h1 className="TextTravelForm">Desde</h1>
                        <input type ="date" className="InputTravelForm" placeholder="Indique su fecha de partida"></input>
                    </div>
                    <div>
                        <h1 className="TextTravelForm">Hasta</h1>
                        <input type ="date"  className="InputTravelForm" placeholder="Indique su fecha de llegada"></input>
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
                <button type="submit" className="FormTravelButton">Buscar</button>
                </div>
            </div>

        </div>
    )
}

export default TravelForm