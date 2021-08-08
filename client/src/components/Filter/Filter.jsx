//import {useEffect, useState } from 'react'
//import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sortFlight} from '../../store/actions/sortFlight'
import {filterAeroFligths} from '../../store/actions/filterAeroFligths'
import {filterCardAero} from '../../store/actions/filterFligthCard'
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
   const flight = useSelector(state => state.flights)
   const aeroUnico = useSelector(state => state.aeroFiltro)

   //console.log('aero', aeroLoaded)

   function handlerChange(e){ //se encarga de actualizar el estado
    dispatch(sortFlight(e.target.value,flight))
   }

   function handlerAerolineas(){
    dispatch(filterAeroFligths(flight))
   }

   function eligeAero(aero) {
      console.log('selecciono',aero)
      dispatch(filterCardAero(flight,aero))
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
           <select className="select-css" placeholder="Select" name="ordenar" onChange={handlerAerolineas}>
             <option  value=""> Seleccione Opcion </option>
             <option  value="aerolineas">Aerolineas</option>
             <option  value="escala">Escala</option>
           </select>
           <p className="filterTitle"><a href="javascript:void(0)"></a>AEROLINEAS</p>
          
           {
                 aeroUnico && aeroUnico.map((aero) => {
                 return (
                    <p><label className="colorCk"><input type="radio" name="aerolienea" onChange={()=>eligeAero(aero)} value={aero}/>{aero}</label></p>
                 )
                })
            }
            <p>ESCALA</p>
          
       </div>
       </div>
      
   )

}