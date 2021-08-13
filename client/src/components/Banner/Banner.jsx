import React from "react"
import { useHistory } from "react-router";
import "./Banner.css"
import DropdownTriggerExample from "../TriggerLogin/TriggerLogin"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

// import 'semantic-ui-css/semantic.min.css';


export const Banner = () => {

    const userSingin = useSelector(state => state.userSignin)
    const { userInfo } = userSingin
    const stateComponent2 = useSelector(state => state.reducersActivities.stateComponent)
    const history = useHistory();
    const sendHome = function () {
        history.push('/')
    }
    console.log('ESTE ES EL ESTADO:'+stateComponent2)


    return (
        <div className="BannerContainer">
            {stateComponent2 === true ? (
                <div className="Banner">
                    <div><div onClick={() => sendHome()} className="BannerTitle">LowHenry</div></div>
                    {
                        userInfo ?

                            <DropdownTriggerExample userInfo={userInfo} /> :
                            <NavLink className="LinkToLogin" to="/login">Ingresar</NavLink>
                    }

                </div>
            ) : null}
        </div>
    )
}

export default Banner