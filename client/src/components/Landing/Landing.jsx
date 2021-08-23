import React, { useEffect } from "react"
import "./Landing.css"
import Banner from "../Banner/Banner"
import Navbar from "../NavBar/Navbar"
import TravelForm from "../TravelForm/TravelForm"
import image from './img3.png';
import axios from 'axios';
import News from '../News/News'
import CarouselPromos from "../CarouselPromos/CarouselPromos"
import CarouselNews from "../Carousel/CarouselNews"

export const Home = () => {

    return (
        <>
            <div className="LandingContainer">
                <img src={image} className='LandingFirst' />

                <div className='TravelForm'><TravelForm /></div>


                <News></News>

                {/* <div className='Aerolineas'>Visitá los destinos más elegidos por los turistas</div> */}

            </div>
            <footer className='carouselPromos'><CarouselPromos /> </footer>
            <div className='pruebarender' ><h1>PROPUESTA DE TRES ACTIVIDADES ALEATORIAS QUE SE LE SUGIEREN AL USUARIO PARA COMPRAR </h1></div>
            <div> <CarouselNews /> </div>

        </>
    )
}

export default Home