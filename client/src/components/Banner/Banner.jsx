import React from "react"
import "./Banner.css"
import DropdownTriggerExample from "../TriggerLogin/TriggerLogin"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import 'semantic-ui-css/semantic.min.css';

export const Banner = () => {
    
    const userSingin = useSelector(state => state.userSignin)
    const {userInfo} = userSingin

    return (
        <div className="BannerContainer">
            <div className="Banner">
                <h1 className="BannerTitle">TicketBarato</h1>
                {
                    userInfo?
                    <DropdownTriggerExample userInfo={userInfo}/>:
                    <NavLink className="LinkToLogin" to="/login">Log in</NavLink>
                }               
                
            </div>
        </div>
    )
}

export default Banner