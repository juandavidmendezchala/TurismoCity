import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import "./detailPostSupplier.css"
import { useHistory } from 'react-router-dom';

export const DetailPostSupplier = ({ activity, active, city, price, idPost, idUser, images, description, country }) => {
    return (
        <div className="marginArriba">
            <div className="cardInfoSup" >
                <div className="infoContainerSup">
                    <p>Publicacion Nro: {idPost}</p>
                    <p><span>{country}</span></p>
                    <p>Ciudad donde vas a proveer tu actividad: <span>{city}</span></p>
                    <p>{description}</p>
                </div>
                <a href={`/activity/${idPost}`}>Ver publicacion</a>
            </div>
        </div>
    )
}
