import React from "react"
import "./Banner.css"
import DropdownTriggerExample from "../TriggerLogin/TriggerLogin"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import 'semantic-ui-css/semantic.min.css';
import { useAuth0 } from "@auth0/auth0-react"


export const Banner = () => {

    //const userSingin = useSelector(state => state.userSignin)
    // const { userInfo } = userSingin
    const { user, loginWithRedirect } = useAuth0()



    return (
        <div className="BannerContainer">
            <div className="Banner">
                <div class="shake-slow shake-constant shake-constant--hover"><NavLink to="/" className="BannerTitle">LowHenry</NavLink></div>
                {
                    user ?

                        <DropdownTriggerExample /> :
                        <NavLink onClick={loginWithRedirect} className="LinkToLogin" to="/">Ingresar</NavLink>

                }

            </div>
        </div>
    )
}

export default Banner