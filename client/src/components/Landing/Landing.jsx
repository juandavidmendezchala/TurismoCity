import React, { Fragment, useEffect } from "react"
import "./Landing.css"
import TravelForm from "../TravelForm/TravelForm"
import image from './img3.png';
import News from '../News/News'
import CarouselPromos from "../CarouselPromos/CarouselPromos"
import YourCountry from "../YourCountry/YourCountry"
import { useSelector } from "react-redux"
import CarouselNews from "../Carousel/CarouselNews"
import LandingActivities from '../LandingActivities/LandingActivities'

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
            <LandingActivities></LandingActivities>
            <div> <CarouselNews /> </div>

        </>
    )
}

export default Home