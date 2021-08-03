import React from "react"
import "./Landing.css"
import Banner from "../Banner/Banner"
import Navbar from "../NavBar/Navbar"
import TravelForm from "../TravelForm/TravelForm"

export const Landing = () => {
    return (
        <div className="LandingContainer">
            <Banner />
            <Navbar />
            <TravelForm />
        </div>
    )
}

export default Landing