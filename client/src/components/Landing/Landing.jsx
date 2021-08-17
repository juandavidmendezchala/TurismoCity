import React, { useEffect } from "react"
import "./Landing.css"
import Banner from "../Banner/Banner"
import Navbar from "../NavBar/Navbar"
import TravelForm from "../TravelForm/TravelForm"
import image from './img3.png';
import axios from 'axios';

export const Home = () => {

    return (
        <div className="LandingContainer">
            <img src={image} className='LandingFirst'/>
           
            <div className='TravelForm'><TravelForm /></div>
            <div className='Aerolineas'>Visitá los destinos más elegidos por los turistas</div>
                <div></div>
        </div>
    )
}

export default Home