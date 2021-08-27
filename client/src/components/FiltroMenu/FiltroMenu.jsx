import './FiltroMenu.css'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sortFlight} from '../../store/actions/sortFlight'
import {filterAeroFligths} from '../../store/actions/filterAeroFligths'
import {filterCardAero} from '../../store/actions/filterFligthCard'
import {searchEscala} from '../../store/actions/Escala'
import {filterScale} from '../../store/actions/filterScale'
import {filterPrice} from '../../store/actions/searchPrice'
import {filterTime} from '../../store/actions/filterTime'
//import {backupFlight} from '../../store/actions/backupFlight'
//import './FlightCard.css'
import * as IconName from "react-icons/ai";

import { getFlights } from '../../store/actions/getFlights'

//AiOutlineClear
export default function FiltroMenu(){
   
    const [precio, setPrecio] = useState()
    const flight = useSelector(state => state.listFlights.flights)
    const aFilter = useSelector(state => state.listFlights.aeroFiltro)
    const sEscala = useSelector(state => state.listFlights.escala)
    const dispatch = useDispatch()
    const [stateFiltro, setStateFiltro] = useState({
      precioDesde:'',
      precioHasta:'',
      horaDesde:'',
      horarioHasta:''
    })

    console.log('trae aerolineas',aFilter)

  function handlerChange(e){ 
    setPrecio({
      ...precio,
      //le paso la propiedad que cambie
      [e.target.name] : e.target.value //cuando name no es el nombre se usa corchtes
     })
  }



  function eligeAero(aero) {

    console.log('pro esto quiere fitlrar',aero)
 
    dispatch(filterCardAero(flight,aero))
    //dispatch(filterAeroFligths(flight))
   }

   function mostrarHora(){
    var horaD = stateFiltro.horaDesde.slice(0,2)
    var minutosD = stateFiltro.horaDesde.slice(3,5)
    //console.log('hora',hD)
    var horaH = stateFiltro.horarioHasta.slice(0,2)
    var minutosH = stateFiltro.horarioHasta.slice(3,5)
    //console.log('minutos',hH)
    var enMinutosD = parseInt(horaD)*60 + parseInt(minutosD)
    var enMinutosH = parseInt(horaH)*60 + parseInt(minutosH)
    console.log('convert en minuts',enMinutosD)
    dispatch(filterTime(flight, enMinutosD, enMinutosH))
   }

   function mostrarPrecio(){
    const {precioDesde, precioHasta} = stateFiltro
    dispatch(filterPrice(flight, precioDesde, precioHasta))
   }

   function handlerChangeInput(e) {
    setStateFiltro({
      ...stateFiltro,
      //le paso la propiedad que cambie
      [e.target.name] : e.target.value //cuando name no es el nombre se usa corchtes
     })
   }
 
  function eligePrecio(precio){
    console.log('ordenar por...',precio)
    dispatch(sortFlight(precio,flight))
  }

  function buscarAerolineas() {
    dispatch(filterAeroFligths(flight))
  }

  function buscarEscala() {
    dispatch(searchEscala(flight))
  }

  function eligeEscala(esc){
    console.log('esto es lo que eligio', esc)
    dispatch(filterScale(flight,esc))
  }

  function refrescar(){
    window.location.reload(false);
  }
    
    return (
        <div className="fondoNuevoMenu">
            <nav id="menu nuevoColor">
            <div className="menu-item">
                <div className="menu-text">
                    <a className="menucitoA" href="#">Ordenar</a>
                </div>
                <div className="sub-menu">
                    <div className="icon-box">
                        <div className="icon"><i className="fal fa-wind-turbine"></i></div>
                        <p><label className="colorCk"><input type="radio" name="precio" onChange={()=>eligePrecio('mayMenor')} value="mayMenor"/>Mayor a Menor</label></p>
                        <p><label className="colorCk"><input type="radio" name="precio" onChange={()=>eligePrecio('menMayor')} value="menMayor"/>Menor a Mayor</label></p>
                    </div>
                   
                    <div className="sub-menu-holder"></div>
                </div>
            </div>
//             <div className="menu-item">
//                 <div className="menu-text">
//                     <a className="menucitoA" onClick={buscarAerolineas} href="#">Aerolineas</a>
                   
//                 </div>
//                 <div className="sub-menu">
//                 {
//                  aFilter && aFilter.map((aero) => {
//                  return (
//                     <p><label className="colorCk"><input type="radio" name="aerolienea" onChange={()=>eligeAero(aero)} value={aero}/>{aero}</label></p>
//                  )
//                 })
//                 }
                   
//                     <div className="sub-menu-holder"></div>
//                 </div>
//             </div>
            <div className="menu-item">
                <div className="menu-text">
                    <a className="menucitoA" onClick={buscarEscala} href="#">Escala</a>
                </div>
                <div className="sub-menu">
                {
                 sEscala && sEscala.map((esc) => {
                 return (
                    <p><label className="colorCk"><input type="radio" name="scale" onChange={()=>eligeEscala(esc)} value={esc}/>{esc}</label></p>
                 )
                })
              }
                   
                    <div className="sub-menu-holder"></div>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-text">
                    <a className="menucitoA" href="#">Horario</a>
                </div>
                <div className="sub-menu">
                 Desde<input type="time" className="select-css" name="horaDesde" step="1" id="reloj" onChange={handlerChangeInput}/>
                 Hasta<input type="time" className="select-css" name="horarioHasta" step="1" id="reloj1" onChange={handlerChangeInput}/>
             
                 <button className="btnBuscar" onClick={mostrarHora}>Buscar</button>
                   
                    <div className="sub-menu-holder"></div>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-text">
                    <a className="menucitoA" href="#">Precio</a>
                </div>
                <div className="sub-menu">
                Desde<input type="text" className="input-css" name="precioDesde" id="precioDesde" onChange={handlerChangeInput}/>
                             Hasta<input type="text" className="input-css" name="precioHasta" id="precioHasta" onChange={handlerChangeInput}/>
                            <button className="btnBuscar" onClick={mostrarPrecio}>Buscar</button>
                   
                    <div className="sub-menu-holder"></div>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-text">
                    <a className="menucitoA" onClick={refrescar} href="#"><IconName.AiOutlineClear/></a>
                </div>
            </div>
            </nav>

        </div>
    )
}
