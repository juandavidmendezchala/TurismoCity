import React, { useEffect, useState } from 'react'
import image1 from './woman.jpg';
import image2 from './Horse.jpg';
import image3 from './Historica.jpg';
import image4 from './Surf.webp';
import { useSelector, useDispatch } from 'react-redux';

import './FavoritesActivities.css'
import { getFavorites } from '../../store/actions/getFavorites';
import { removeMyFavorite } from '../../store/actions/removeMyFavorite';

export default function FavoritesActivities({sidebar}) {

const dispatch = useDispatch()
const userId=1;
const favoritos = useSelector(state => state.reducersActivities.favorites)
const userInfo = useSelector(state => state.userSignin.userInfo)
console.log(userInfo)

useEffect(()=>{
    dispatch(getFavorites(userInfo.id))
},[])

const [Favoritos,setFavoritos]=useState([
    { 'image': image2, 'name': 'Paseo a caballo', 'duracion': '1.30 hs', 'lugar': 'Tafi del Valle', 'Descripción': 'Aqui va la descripcion de la actividad' },
    { 'image': image3, 'name': 'Visita a la Casa Historica', 'duracion': '1 h', 'lugar': 'Tucumán', 'Descripción': 'Aqui va la descripcion de la actividad' },
    { 'image': image1, 'name': 'Clase de Yoga', 'duracion': '3 hs', 'lugar': 'Buenos Aires', 'Descripción': 'Aqui va la descripcion de la actividad' },
    { 'image': image4, 'name': 'Surf', 'duracion': '1.30 hs', 'lugar': 'Montañitas', 'Descripción': 'Aqui va la descripcion de la actividad' },
    { 'image': image2, 'name': 'Paseo a caballo', 'duracion': '1.30 hs', 'lugar': 'Tafi del Valle', 'Descripción': 'Aqui va la descripcion de la actividad' },
    { 'image': image3, 'name': 'Visita a la Casa Historica', 'duracion': '1 h', 'lugar': 'Tucumán', 'Descripción': 'Aqui va la descripcion de la actividad' },
    { 'image': image1, 'name': 'Clase de Yoga', 'duracion': '3 hs', 'lugar': 'Buenos Aires', 'Descripción': 'Aqui va la descripcion de la actividad' },
    { 'image': image4, 'name': 'Surf', 'duracion': '1.30 hs', 'lugar': 'Montañitas', 'Descripción': 'Aqui va la descripcion de la actividad' },
])

    function removeFavorites(idAct) {
        // var Favoritos2=Favoritos.filter(favo=>name!==favo.name)
        // setFavoritos(Favoritos2)
        dispatch(removeMyFavorite(userInfo.id,idAct))
    }
    return (
        <div className='FavoriteCardBackComplete'>
        <div className={sidebar===true?'FavoriteCardSmall':'FavoriteCardLarge'}>
            {favoritos.activities?.length===0?(<div>En esta sección podrás visualizar tus actividades marcadas como favoritas. Aún no agregaste
                ningun actividad como favorita.
            </div>):null}
            {favoritos.activities?.map(fav => {
                return (
                    <div className='FavoriteCardConteiner'>
                        <div className='FavoriteCardFront'>
                            <img src={fav.images} className='FavoriteImage' />
                            <strong className='FavoriteTitle'>{fav.name}</strong>
                            <div className='FavoriteDescription'>{fav.description}</div>
                    
                            <button className='FavoriteRemove' key={fav.id} onClick={()=>removeFavorites(fav.id)}>&#x2764;</button>
                        </div>
                        <div className='FavoriteCardGet'>
                            <a href={`/activity/${fav.id}`}className='LinkGetIt'>Quiero saber más...</a>
                        </div>
                    </div>
                )
            })}

        </div>
        </div>
    )
}