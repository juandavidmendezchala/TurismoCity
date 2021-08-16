import './UserNav.css'
import React, { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { changeState } from '../../store/actions/stateComponents';

export default function UserNav(){

    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(changeState(false));
    // return () => dispatch(changeState(true));
    // },[])

   return(

		<div>
			HOLA
		</div>

    //    <div className='TODO'>
    //       	<nav class="accordion arrows">
	// 	<header class="box">
	// 		<label for="acc-close" class="box-title">Menu de Actividades</label>
	// 	</header>
	// 	<input type="radio" name="accordion" id="cb1" />
	// 	<section class="box">
	// 		<label class="box-title" for="cb1">Mis paquetes</label>
	// 		<label class="box-close" for="acc-close"></label>
	// 		<div class="box-content">Permite Crear un nuevo paquete para nuestro viaje</div>
	// 	</section>
	// 	<input type="radio" name="accordion" id="cb2" />
	// 	<section class="box">
	// 		<label class="box-title" for="cb2">Lista de Deseps</label>
	// 		<label class="box-close" for="acc-close"></label>
	// 		<div class="box-content">Add the class 'arrows' to nav.accordion to add dropdown arrows.</div>
	// 	</section>
	// 	<input type="radio" name="accordion" id="cb3" />
	// 	<section class="box">
	// 		<label class="box-title" for="cb3">Dejar tu Feedback</label>
	// 		<label class="box-close" for="acc-close"></label>
	// 		<div class="box-content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus tristique nisi, maximus ullamcorper ante finibus eget.</div>
	// 	</section>

	// 	<input type="radio" name="accordion" id="acc-close" />
	// </nav>
    //    </div>
       
   )
}