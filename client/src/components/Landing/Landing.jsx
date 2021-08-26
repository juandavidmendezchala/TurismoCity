import React, { Fragment, useEffect, useState } from "react"
import "./Landing.css"
import TravelForm from "../TravelForm/TravelForm"
import image from './img3.png';
import axios from 'axios';
import { useHistory } from "react-router-dom"
import ChatBotLanding from "../Chatbot/ChatBot"
import ButtonChatBot from "../Chatbot/ButtonChatBot"

import News from '../News/News'
import CarouselPromos from "../CarouselPromos/CarouselPromos"
import YourCountry from "../YourCountry/YourCountry"
import { useSelector } from "react-redux"
import CarouselNews from "../Carousel/CarouselNews"
import LandingActivities from '../LandingActivities/LandingActivities'
import { REACT_APP_API } from "../../store/Consts/Consts";
import airports from './airports.json'
import countries from '../ActivitiesFilter/countries+states.json'


export const Home = () => {
    // const history = useHistory();
    // useEffect(()=>{
    //     history.push('/activity/1')
    // },[])

    // const fecha = Date.now()
    const fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate()+3);
    console.log('ESTA ES LA FECHA MAS 3 DIAS',fechaActual)

    console.log('AEROPUERTOS',airports)
    const userCountry = useSelector(state => state.userCountry)
    const history = useHistory();
    
    const getAirport = function(countrySelect){
        if (countrySelect==='Brazil'){
            return 'GRU';
        }
        var country = countries.find(countri => countri.name === countrySelect)
        console.log('ESTO ES COUNTRIES:',countries)
        console.log('ESTE ES COUNTRY', country)
        var airport = airports?.find(air => air.city === country.capital)
        console.log(`ESTE ES AIRPORT DE ${countrySelect}`,airport)
        return airport?.code
    }
    
    const flights = function(e){
        console.log("ESTO DEBERIA SER BRAZIL:",userCountry.userCountry)
        if (userCountry.userCountry) {var countrySelect = getAirport(userCountry.userCountry)
        }else {var countrySelect = 'EZE'}
        console.log(countrySelect)
        if (countrySelect===undefined) {countrySelect = 'EZE'} 
        history.push(`/flights?way=onewaytrip&fromPlace=${countrySelect}&toPlace=${e.target.id}&fromDate=${fechaActual.toISOString().slice(0,10)}&classFlight=Economy&adults=1&kids=0&babies=0&currency=USD`)
    }

    return (
        <>
            <div className="LandingContainer">
                <img src={image} className='LandingFirst' />
                <div className='TravelForm'><TravelForm /></div>
                {/* {
                    userCountry?.length > 1 ?
                        <div></div>
                        : */}
                        <YourCountry></YourCountry>
                {/* } */}



                <News></News>

                <div className='Aerolineas'>Visitá los destinos más elegidos por los turistas
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className='citysLanding'>
                    <div className='CardCountry' id='BOG' onClick={(e)=>flights(e)}>BOGOTÁ</div>
                    <div className='CardCountry' id='GIG' onClick={(e)=>flights(e)}>RIO DE JANEIRO</div>
                    <div className='CardCountry'id='FCO' onClick={(e)=>flights(e)}>ROMA</div>
                    <div className='CardCountry'id='CDG' onClick={(e)=>flights(e)}>PARIS</div>
                    <div className='CardCountry' id = 'MIA' onClick={(e)=>flights(e)}>MIAMI</div>
                    <div className='CardCountry' id ='BCN' onClick={(e)=>flights(e)}>BARCELONA</div>
                    <div className='CardCountry' id= 'MAD' onClick={(e)=>flights(e)}>MADRID</div>
                    <div className='CardCountry'id='LIM' onClick={(e)=>flights(e)}>LIMA</div>
                    <div className='CardCountry' id= 'EZE' onClick={(e)=>flights(e)}>BUENOS AIRES</div>
                    <div className='CardCountry' id='JFK' onClick={(e)=>flights(e)}>NEW YORK</div>
                    </div>
                    
                    
                </div>
                <div className="PopUpBot"><ButtonChatBot /></div>

            </div>
            <footer className='carouselPromos'><CarouselPromos /> </footer>
            <LandingActivities></LandingActivities>
            <div> <CarouselNews /> </div>

        </>
    )
}

export default Home