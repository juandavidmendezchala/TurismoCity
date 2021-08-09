//import {useEffect, useState } from 'react'
//import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sortFlight} from '../../store/actions/sortFlight'
//import './FlightCard.css'
import './Filter.css'
export default function Filter(){
   /*const [state, setState] = useState({
    busqueda:''
  })*/
   const [state, setState] = useState({
     ordenar: ''
   })

   const dispatch = useDispatch()
   //const recipes = useSelector(state=> state.recipeLoaded)
   const flight = useSelector(state => state.listFlights.flights)

   function handlerChange(e){ //se encarga de actualizar el estado
    dispatch(sortFlight(e.target.value,flight))
  }

   return(
       <div className="barra">
           <div className='filter'>
           <h4 className="filterTitle">ORDENAR POR:</h4>
           <p>Precio</p>
           <select className="select-css" placeholder="Select" name="ordenar" onChange={handlerChange}>
             <option  value=""> Seleccione Opcion </option>
             <option  value="menMayor">Menor a Mayor</option>
             <option  value="mayMenor">Mayor a Menor</option>
           </select>
           <br/>
           <h4 className="filterTitle">FILTRAR POR:</h4>
           <p>AEROLINEAS</p>
           <label htmlFor=""> <input type="checkbox" id="cbox1" value="first_checkbox"/> Aerolineas Argentina </label>
          
       </div>
       </div>
      
   )

}