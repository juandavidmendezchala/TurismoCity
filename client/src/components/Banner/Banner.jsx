import React from "react"
import { useHistory } from "react-router";
import "./Banner.css"
import DropdownTriggerExample from "../TriggerLogin/TriggerLogin"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import 'semantic-ui-css/semantic.min.css';
import { useAuth0 } from "@auth0/auth0-react"


export const Banner = () => {

    const userSingin = useSelector(state => state.userSignin)
    const { userInfo } = userSingin
    const stateComponent2 = useSelector(state => state.reducersActivities.stateComponent)
    const history = useHistory();
    const sendHome = function () {
        history.push('/')
    }
    console.log('ESTE ES EL ESTADO:'+stateComponent2)
    //const userSingin = useSelector(state => state.userSignin)
    // const { userInfo } = userSingin
    const { user, loginWithRedirect } = useAuth0()



    return (
        <div className="BannerContainer">
            {stateComponent2 === true?(
            <div className="Banner">
            <div class="shake-slow shake-constant shake-constant--hover"><NavLink to="/" className="BannerTitle">LowHenry</NavLink></div>
            {
                user ?

                    <DropdownTriggerExample /> :
                    <NavLink onClick={loginWithRedirect} className="LinkToLogin" to="/">Ingresar</NavLink>

            }

        </div>):null}
            
        </div>
    )
}

export default Banner