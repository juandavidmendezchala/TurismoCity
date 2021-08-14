import React from 'react'
import './ActivityCard.css'
import { Link } from 'react-router-dom';

export default function ActivityCard({ id, name, description, date, price, places, duration, initialTime, images, country, city }) {



    return (
        <div className="body-activitie">
            <div className="card">
                <Link to={`/activity/${id}`}>
                    <div className="card-image">
                        <img src={images[0]} height="200px" width='150px' className="img" />
                    </div>
                </Link>
                <div className="card-text">
                    <span className="date">{date}</span>
                    <h2>{name}</h2>
                    <p>{description}</p>
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