import React from 'react'
import "./Nosotrxs.css"
import foto from "./fotoSobreNos.jpg"
import block from "./Equipo.png"


const Nosotrxs = () => {
    return (
        <div className="SuperContainer">
            <div className="FirstBlock">
                <img className="FotoQuienesSomos" src={foto} alt="Foto representativa"></img>
                <h3 className="QuienesSomos">Somos la empresa de viajes que te pone en primer lugar</h3>
                {/* <img className="FotoAvioncito" src="https://www.pikpng.com/pngl/b/84-845652_dibujo-avion-de-papel-clipart.png"></img> */}
            </div>
            <div className="SecondBlock">
                <img className="SecondBlockImg" src={block}></img>
            </div>
        </div>
    )
}

export default Nosotrxs
