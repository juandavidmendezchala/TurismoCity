import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './ActivityCard.css'
import { Link } from 'react-router-dom';
import favoriteLogo from '../../icons/FavoriteLogo.png'
import {addFavorite} from '../../store/actions/activityActions.js'
import {deleteFavorite} from '../../store/actions/activityActions.js'

export default function ActivityCard({ id, name, description, date, price, places, duration, initialTime, images, country, city }) {

    const dispatch = useDispatch()
    
    //const favorites = useSelector(state => state.reducersActivities.favorites)

    const onFavorite = () => {
        dispatch(addFavorite(id, userId))
    }

    return (
        <div className="body-activitie">
            <div className="card">
                <Link to={`/activity/${id}`}>
                    <div className="card-image">
                        <img src={images[0]} height="200px" width='200px' className="img" />
                    </div>
                </Link>
                <div className="card-text">
                    <span className="date">{date}</span>
                    <h2>{name}</h2>
                    <p>{description}</p>
                <div className="favoritelogo-div" >
                        <button className="button-favorite" onClick={e => console.log(e.target.value)}>
                        <img src={favoriteLogo} height="25px" width='25px' onClick={console.log("g")}></img>
                        </button>
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