import React from 'react';
import './ActivitiesComments.css';
import UserLogo from '../../icons/UserLogo.png'

export default function ActivitiesComments({ comment, score, update, userName, picture }) {
    return (
        <div className="comment-container-card">
            {/* <div className="img-card-userName" > */}
            <img className='avatar-comments' src={picture} height="50px" width='50px'></img>
            <div className='ParteDerechaComments'>
                <h5 className="comment-card-userName">{userName}</h5>
                <p>{comment}</p>
                                <strong className='puntacionStyle'>Puntuación: <label className={parseInt(score) >= 1 ? 'estrellitaActiva' : 'EstrellitasGrises'}  >★</label>
                                    <label className={parseInt(score)>= 2 ? 'estrellitaActiva' : 'EstrellitasGrises'}  >★</label>
                                    <label className={parseInt(score) >= 4 ? 'estrellitaActiva' : 'EstrellitasGrises'}  >★</label>
                                    <label className={parseInt(score) >= 3 ? 'estrellitaActiva' : 'EstrellitasGrises'}  >★</label>
                                    <label className={parseInt(score) === 5 ? 'estrellitaActiva' : 'EstrellitasGrises'} >★</label>
                                </strong>
                <h6 className='dateComments'>{update}</h6>

                {/* </div> */}
            </div>
        </div>
    )
}