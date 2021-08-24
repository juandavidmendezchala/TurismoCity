import React, { Fragment, useEffect } from "react"
import "./Landing.css"
import Banner from "../Banner/Banner"
import Navbar from "../NavBar/Navbar"
import TravelForm from "../TravelForm/TravelForm"
import image from './img3.png';
import axios from 'axios';
import News from '../News/News'
import CarouselPromos from "../CarouselPromos/CarouselPromos"
import YourCountry from "../YourCountry/YourCountry"
import { useSelector } from "react-redux"

export const Home = () => {

    const userCountry = useSelector(state => state.userCountry)

    return (
        <>
            <div className="LandingContainer">
                <img src={image} className='LandingFirst' />

                <div className='TravelForm'><TravelForm /></div>
                {
                 userCountry?.length > 1?
                    <div></div>
                    :
                    <YourCountry></YourCountry>
                }
                


                <News></News>

                {/* <div className='Aerolineas'>Visitá los destinos más elegidos por los turistas</div> */}

            </div>
            <footer className='carouselPromos'><CarouselPromos /> </footer>
            <div ></div>

        </>
    )
}

export default Home