import React from "react"
import "./Banner.css"
import DropdownTriggerExample from "../TriggerLogin/TriggerLogin"
import { NavLink } from "react-router-dom"

export const Banner = () => {
    return (
        <div className="BannerContainer">
            <div className="Banner">
                <h1 className="BannerTitle">TicketBarato</h1>
                <DropdownTriggerExample />
                <NavLink className="LinkToLogin" to="/login">Log in</NavLink>
            </div>
        </div>
    )
}

export default Banner