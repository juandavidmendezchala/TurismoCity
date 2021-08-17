import React from 'react';
import './ActivitiesComments.css';
import UserLogo from '../../icons/UserLogo.png'

export default function ActivitiesComments({comment, score, update, userName}) {
    return(
        <div className="comment-container-card">
            <div className="img-card-userName" >
            <h5 className="comment-card-userName">{userName}</h5>
            <img  src={UserLogo} height="50px" width='50px'></img>
            </div>
            <div className="div-user-update">
            <h6>{update}</h6>
            </div>
            <div className="comment-card-commentScore">
            <p>{comment}</p>
            <h5>{score}</h5>
            </div>
        </div>
    )
}