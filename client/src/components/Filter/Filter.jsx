//import {useEffect, useState } from 'react'
//import {useDispatch, useSelector} from 'react-redux'
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

import './Filter.css'
import { getFlights } from '../../store/actions/getFlights'
export default function Filter(){
   /*const [state, setState] = useState({
    busqueda:''
  })*/
   const [state, setState] = useState({
     ordenar: ''
   })

   const [searchFilter, setSearchFilter] = useState({
     newFilter: ''
   })

   const [stateFiltro, setStateFiltro] = useState({
    precioDesde:'',
    precioHasta:'',
    horaDesde:'',
    horarioHasta:''
  })

   
   /*
      <p>Desde<input type="text" name="horaDesde"/></p>
            <p>Hasta<input type="text" name="horarioHasta"/></p>
            <p>PRECIO</p>
            <p>Desde<input type="text" name="precioDesde"/></p>
            <p>Hasta<input type="text" name="precioHasta"/></p>
   */

   const dispatch = useDispatch()
   //const recipes = useSelector(state=> state.recipeLoaded)
   //const flight = useSelector(state => state.flights)
  // const aeroUnico = useSelector(state => state.aeroFiltro)

   //console.log('aero', aeroLoaded)
   const flight = useSelector(state => state.listFlights.flights)
   const aFilter = useSelector(state => state.listFlights.aeroFiltro)
   const sEscala = useSelector(state => state.listFlights.escala)
   const detail = useSelector(state => state.listFlights.detailFlights)
   const n = useSelector(state => state.userSignin.flightInfo)
  

   
     //detailFlights
   console.log('esta es la escala', sEscala)

   console.log('este es el filro', aFilter)
   function handlerChange(e){ //se encarga de actualizar el estado
    dispatch(sortFlight(e.target.value,flight))
   }

   function handlerAerolineas(e){
    //dispatch(getFlights(detail))
    dispatch(filterAeroFligths(flight))
    dispatch(searchEscala(flight))
    /*if (e.target.value === 'aerolineas'){
      dispatch(getFlights(detail))
      dispatch(filterAeroFligths(flight))
    }

    if(e.target.value === 'escala') {
      dispatch(getFlights(detail))
      dispatch(searchEscala(flight))
    }*/
   
   
   }
  
   function eligeAero(aero) {
      //console.log('selecciono',aero)
      //dispatch(getFlights(detail))
      dispatch(filterCardAero(flight,aero))
      document.getElementById("reloj").value = "";
      document.getElementById("reloj1").value = "";
      document.querySelectorAll('[name=scale]').forEach((x) => x.checked = false);
      document.getElementById("precioDesde").value = "";
    document.getElementById("precioHasta").value = "";
   }
  
   function eligeEscala(esc) {
    
    //dispatch(getFlights(detail))
    //console.log('detail',detail)
    //console.log('user', n)
    const paramsString = window.location.search;
  const params = new URLSearchParams(paramsString);
  const way = params.get('way');
  const fromPlace = params.get('fromPlace');
  const toPlace = params.get('toPlace');
  const fromDate = params.get('fromDate');
  const toDate = params.get('toDate');
  const classFlight = params.get('classFlight');
  const adults = params.get('adults');
  const kids = params.get('kids');
  const babies = params.get('babies');
  const currency = params.get('currency')

  var busc = {way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency}
    dispatch(getFlights(busc))

    dispatch(filterScale(flight,esc))
      //document.getElementById("reloj").disabled = true;
      document.getElementById("reloj").value = "";
      document.getElementById("reloj1").value = "";
      document.querySelectorAll('[name=aerolienea]').forEach((x) => x.checked = false);
      document.getElementById("precioDesde").value = "";
    document.getElementById("precioHasta").value = "";
   }

   function handlerChangeInput(e) {
    setStateFiltro({
      ...stateFiltro,
      //le paso la propiedad que cambie
      [e.target.name] : e.target.value //cuando name no es el nombre se usa corchtes
     })
   }
  
   /*
       precioDesde:'',
    precioHasta
   */

   function mostrarPrecio(){
    const paramsString = window.location.search;
  const params = new URLSearchParams(paramsString);
  const way = params.get('way');
  const fromPlace = params.get('fromPlace');
  const toPlace = params.get('toPlace');
  const fromDate = params.get('fromDate');
  const toDate = params.get('toDate');
  const classFlight = params.get('classFlight');
  const adults = params.get('adults');
  const kids = params.get('kids');
  const babies = params.get('babies');
  const currency = params.get('currency')

  var busc = {way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency}
    dispatch(getFlights(busc))
    dispatch(filterPrice(flight, stateFiltro.precioDesde, stateFiltro.precioHasta))
    
     //document.getElementById("reloj").disabled = true;
     document.getElementById("reloj").value = "";
     document.getElementById("reloj1").value = "";
     document.querySelectorAll('[name=aerolienea]').forEach((x) => x.checked = false);
     document.querySelectorAll('[name=scale]').forEach((x) => x.checked = false);
   }

   function mostrarHora(){
      /* horaDesde:'',
    horarioHasta:''*/
    //stateFiltro.horaDesde
    //stateFiltro.horarioHasta

    const paramsString = window.location.search;
  const params = new URLSearchParams(paramsString);
  const way = params.get('way');
  const fromPlace = params.get('fromPlace');
  const toPlace = params.get('toPlace');
  const fromDate = params.get('fromDate');
  const toDate = params.get('toDate');
  const classFlight = params.get('classFlight');
  const adults = params.get('adults');
  const kids = params.get('kids');
  const babies = params.get('babies');
  const currency = params.get('currency')

  var busc = {way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency}
    dispatch(getFlights(busc))
    
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

    document.querySelectorAll('[name=aerolienea]').forEach((x) => x.checked = false);
    document.querySelectorAll('[name=scale]').forEach((x) => x.checked = false);
    document.getElementById("precioDesde").value = "";
    document.getElementById("precioHasta").value = "";
   }

   function handlerOnSubmitPrecio(e){
    const {precioDesde, precioHasta} = stateFiltro
    
    dispatch(filterPrice(flight, precioDesde, precioHasta))
   }


   return(
       <div className="barra">
           <div className='filter'>
           <h4 className="filterTitle">ORDENAR POR:</h4>
           <p>Precio</p>
           <select className="select-css" placeholder="Select" name="ordenar" onChange={handlerChange}>
             <option value=""> Seleccione Opcion </option>
             <option value="menMayor">Menor a Mayor</option>
             <option value="mayMenor">Mayor a Menor</option>
           </select>
           <br/>
           <h4 className="filterTitle">FILTRAR POR:</h4>
           <select className="select-css" placeholder="Select" name="newFilter" onChange={handlerAerolineas}>
             <option value=""> Seleccione Opcion </option>
             <option value="aerolineas">Aerolineas</option>
             <option value="escala">Escala</option>
           </select>
           <p className="filterTitle"><a href="javascript:void(0)"></a>AEROLINEAS</p>
           {
                 aFilter && aFilter.map((aero) => {
                 return (
                    <p><label className="colorCk"><input type="radio" name="aerolienea" onChange={()=>eligeAero(aero)} value={aero}/>{aero}</label></p>
                 )
                })
            }
       
            <p>ESCALA</p>
            {
                 sEscala && sEscala.map((esc) => {
                 return (
                    <p><label className="colorCk"><input type="radio" name="scale" onChange={()=>eligeEscala(esc)} value={esc}/>{esc}</label></p>
                 )
                })
            }
     
              <p>HORARIO</p>
              <p>Desde<input type="time" name="horaDesde" step="1" id="reloj" onChange={handlerChangeInput}/></p>
              <p>Hasta<input type="time" name="horarioHasta" step="1" id="reloj1" onChange={handlerChangeInput}/></p>
             
              <button onClick={mostrarHora}>Buscar</button>
            
              <p>PRECIO</p>
              <p>Desde<input type="text" name="precioDesde" id="precioDesde" onChange={handlerChangeInput}/></p>
              <p>Hasta<input type="text" name="precioHasta" id="precioHasta" onChange={handlerChangeInput}/></p>
               <button onClick={mostrarPrecio}>Buscar</button>
            
       </div>
       </div>
      
   )

}