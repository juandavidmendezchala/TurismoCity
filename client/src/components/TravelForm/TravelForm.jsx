import React from "react"
import "./TravelForm.css"







const TravelForm = () => {
    return (
        <div className="TravelFormContainer">
            <h1>Hola viajerx. A donde te gustaria ir?</h1>
            <div className="FormContainer">
                <div className="DesdeHaciaContainer">
                <div>  <h1 className="TextTravelForm">  DESDE : </h1>
              
<select >
              {/* <select
               onChange={e => changeCode(e)}> */}

          <option value="AFG">Afghanistan</option>
          <option value="ALA">Åland Islands</option>
          <option value="ALB">Albania</option>
          <option value="DZA">Algeria</option>
          <option value="ASM">American Samoa</option>
          <option value="AND">Andorra</option>
          <option value="AGO">Angola</option>
          <option value="AIA">Anguilla</option>
          <option value="ATA">Antarctica</option>
          <option value="ATG">Antigua and Barbuda</option>
          <option value="ARG">Argentina</option>
          <option value="ARM">Armenia</option>
          <option value="ABW">Aruba</option>
          <option value="AUS">Australia</option>
          <option value="AUT">Austria</option>
          <option value="AZE">Azerbaijan</option>
          <option value="VUT">Vanuatu</option>
          <option value="VEN">Venezuela, Bolivarian Republic of</option>
          <option value="VNM">Viet Nam</option>
          <option value="VGB">Virgin Islands, British</option>
          <option value="VIR">Virgin Islands, U.S.</option>
          <option value="WLF">Wallis and Futuna</option>
          <option value="ESH">Western Sahara</option>
          <option value="YEM">Yemen</option>
          <option value="ZMB">Zambia</option>
          <option value="ZWE">Zimbabwe</option>
      </select>
              </div> 
                    
                        {/* <h1 className="TextTravelForm">Hacia</h1> */}

                        <div>  <h1 className="TextTravelForm" > HACIA : </h1>
              
              <select>
                            {/* <select
                             onChange={e => changeCode(e)}> */}
                             
                        <option value="AFG">Afghanistan</option>
                        <option value="ALA">Åland Islands</option>
                        <option value="ALB">Albania</option>
                        <option value="DZA">Algeria</option>
                        <option value="ASM">American Samoa</option>
                        <option value="AND">Andorra</option>
                        <option value="AGO">Angola</option>
                        <option value="AIA">Anguilla</option>
                        <option value="ATA">Antarctica</option>
                        <option value="ATG">Antigua and Barbuda</option>
                        <option value="ARG">Argentina</option>
                        <option value="ARM">Armenia</option>
                        <option value="ABW">Aruba</option>
                        <option value="AUS">Australia</option>
                        <option value="AUT">Austria</option>
                        <option value="AZE">Azerbaijan</option>
                       
                        <option value="VUT">Vanuatu</option>
                        <option value="VEN">Venezuela, Bolivarian Republic of</option>
                        <option value="VNM">Viet Nam</option>
                        <option value="VGB">Virgin Islands, British</option>
                        <option value="VIR">Virgin Islands, U.S.</option>
                        <option value="WLF">Wallis and Futuna</option>
                        <option value="ESH">Western Sahara</option>
                        <option value="YEM">Yemen</option>
                        <option value="ZMB">Zambia</option>
                        <option value="ZWE">Zimbabwe</option>
                    </select>
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