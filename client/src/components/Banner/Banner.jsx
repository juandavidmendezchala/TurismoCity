import React from "react"
import "./Banner.css"
import DropdownTriggerExample from "../TriggerLogin/TriggerLogin"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import 'semantic-ui-css/semantic.min.css'

export const Banner = () => {

    const userSingin = useSelector(state => state.userSignin)
    const { userInfo } = userSingin


    return (
        <div className="BannerContainer">
            <div className="Banner">
                <div class="shake-slow shake-constant shake-constant--hover"><NavLink to="/" className="BannerTitle">LowHenry</NavLink></div>
                {
                    userInfo ?

                        <DropdownTriggerExample userInfo={userInfo} /> :
                        <NavLink className="LinkToLogin" to="/login">Ingresar</NavLink>
                }

            </div>
        </div>
    )
}

export default Banner