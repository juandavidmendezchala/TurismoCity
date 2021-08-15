import React, { useState } from 'react'
import image1 from './woman.jpg';
import image2 from './Horse.jpg';
import image3 from './Historica.jpg';
import image4 from './Surf.webp';
import './FavoritesActivities.css'
export default function FavoritesActivities({sidebar}) {

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

    function removeFavorites(name) {
        var Favoritos2=Favoritos.filter(favo=>name!==favo.name)
        setFavoritos(Favoritos2)
    }
    return (
        <div className={sidebar===true?'FavoriteCardSmall':'FavoriteCardLarge'}>
            {Favoritos.length===0?(<div>En esta sección podrás visualizar tus actividades marcadas como favoritas. Aún no agregaste
                ningun actividad como favorita.
            </div>):null}
            {Favoritos?.map(fav => {
                return (
                    <div className='FavoriteCardConteiner'>
                        <div className='FavoriteCardFront'>
                            <img src={fav.image} className='FavoriteImage' />
                            <strong className='FavoriteTitle'>{fav.name}</strong>
                            <div className='FavoriteDescription'>{fav.Descripción}</div>
                            <div className='FavoriteDescription'>{fav.Descripción}</div>
                            <div className='FavoriteDescription'>{fav.Descripción}</div>
                            <div className='FavoriteDescription'>{fav.Descripción}</div>
                            <button className='FavoriteRemove' onClick={()=>removeFavorites(fav.name)}>&#x2764;</button>
                        </div>
                        <div className='FavoriteCardGet'>
                            <button href='#'className='LinkGetIt'>Quiero saber más...</button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}