import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ActivityCard.css'
import { Link } from 'react-router-dom';
import favoriteLogo from '../../icons/FavoriteLogo.png'
import favoriteLogoDone from '../../icons/FavoriteLogoDone.png'
import { addFavorite } from '../../store/actions/activityActions.js'
import { removeMyFavorite } from '../../store/actions/removeMyFavorite'
import { useAuth0 } from '@auth0/auth0-react';
import swal from 'sweetalert';

export default function ActivityCard({ id, name, description, date, price, places, duration, initialTime, images, country, city, favorites }) {

    const dispatch = useDispatch()
    const userSignin = useSelector(state => state.userSignin)
    const { loginWithRedirect } = useAuth0()
    const [isFavorite, setIsFavorite] = useState(false)

    const onFavorite = () => {
        if (userSignin.userInfo) {
            dispatch(addFavorite(id, userSignin.userInfo.id))
            const isThisFavorite = favorites?.activities?.filter(f => f.id === id)
            if (isThisFavorite) {
                setIsFavorite(true)
            } else {
                setIsFavorite(false)
            }
        }else{
            swal({
                title: "Loguearse",
                text: "Para guardar esta actividad en favoritos debes loguearte a tu cuenta!",
                icon: "info",
                buttons: true,
                dangerMode: false,
              })
              .then((willDelete) => {
                if (willDelete) {
                    loginWithRedirect()
                }
              });
        }
    }

    const deleteFavorite = () => {
        
            if(userSignin.userInfo) {
                dispatch(removeMyFavorite(userSignin.userInfo.id, id))
                const isThisFavorite = favorites?.activities?.filter(f => f.id === id)
                if (isThisFavorite) {
                    setIsFavorite(true)
                } else {
                    setIsFavorite(false)
                }
            } else {
              loginWithRedirect()        
            }
    }
    const takesOutProvince = function(city){
        return city.split(' ').filter(word => word !== 'Province').join(' ')
    }

    useEffect(() => {
        if(userSignin.userInfo) {
        const isThisFavorite = favorites?.activities?.filter(f => f.id === id) || false
        console.log('ESTO ES LO QUE ESTAMOS VIENDO AHORA:', isThisFavorite)
        if (isThisFavorite.length) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }
    }, [favorites])


    return (
        <div className="body-activitie">
            <div className="cardActivitiesJ">
                <Link to={`/activity/${id}`} className='linkJ'>
                    <img src={images} className="imageActJ" />
                </Link>
                <div className="card-text">
                    <span className="date">{date}</span>
                    <h2>{name}</h2>
                    <span className='country-city'>{country} - {city.includes('Province')?takesOutProvince(city):city}</span>
                    
                    <div className="favoritelogo-div" >
                        {
                            isFavorite ?
                                <button className="button-favorite-done" onClick={e => deleteFavorite()}>
                                   ❤ 
                                </button>
                                :
                                <button className="button-favorite" onClick={e => onFavorite()}>
                                    ❤ 
                                </button>
                        }
                    </div>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <div className="value">{places}</div>
                        <div className="type">Cupos</div>
                    </div>
                    <div className="stat">
                        <div className="value"><sup>USD$</sup>{price}</div>
                        <div className="type">Precio</div>
                    </div>
                    <div className="stat">
                        <div className="value">{duration}<sup>hs</sup></div>
                        <div className="type">Duración</div>
                    </div>
                </div>

            </div>
        </div>
    )
}