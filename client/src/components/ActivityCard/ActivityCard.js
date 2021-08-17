import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ActivityCard.css'
import { Link } from 'react-router-dom';
import favoriteLogo from '../../icons/FavoriteLogo.png'
import favoriteLogoDone from '../../icons/FavoriteLogoDone.png'
import { addFavorite } from '../../store/actions/activityActions.js'
import { removeMyFavorite } from '../../store/actions/removeMyFavorite'

export default function ActivityCard({ id, name, description, date, price, places, duration, initialTime, images, country, city, favorites }) {

    const dispatch = useDispatch()

    const [isFavorite, setIsFavorite] = useState(false)

    const onFavorite = () => {
        dispatch(addFavorite(id, 1))
        const isThisFavorite = favorites?.activities?.filter(f => f.id === id)
        if (isThisFavorite) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }

    const deleteFavorite = () => {
        dispatch(removeMyFavorite(1, id))
        const isThisFavorite = favorites?.activities?.filter(f => f.id === id)
        if (isThisFavorite) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }

    useEffect(() => {
        const isThisFavorite = favorites?.activities?.filter(f => f.id === id) || false
        if (isThisFavorite.length) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }, [favorites])


    return (
        <div className="body-activitie">
            <div className="cardActivitiesJ">
                <Link to={`/activity/${id}`} className='linkJ'>
                    <img src={images[0]} className="imageActJ" />
                </Link>
                <div className="card-text">
                    <span className="date">{date}</span>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className="favoritelogo-div" >
                        {
                            isFavorite ?
                                <button className="button-favorite" onClick={e => deleteFavorite()}>
                                    <img src={favoriteLogoDone} height="25px" width='25px'></img>
                                </button>
                                :
                                <button className="button-favorite" onClick={e => onFavorite()}>
                                    <img src={favoriteLogo} height="25px" width='25px'></img>
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
                        <div className="value"><sup>$</sup>{price}</div>
                        <div className="type">Precio</div>
                    </div>
                    <div className="stat">
                        <div className="value">{duration}<sup>H</sup></div>
                        <div className="type">Duración</div>
                    </div>
                </div>

            </div>
        </div>
    )
}