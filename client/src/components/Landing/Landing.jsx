import React from "react"
import "./Landing.css"
import TravelForm from "../TravelForm/TravelForm"
import FeatureAct from "../FeatureActivities/FeatureAct"

export const Home = () => {
    return (
        <div className="LandingContainer">
            <TravelForm />
            <FeatureAct />
        </div>
    )
}

export default Home