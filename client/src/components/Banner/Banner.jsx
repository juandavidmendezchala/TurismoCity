import React, { Fragment, useEffect } from "react"
import { useHistory } from "react-router";
import "./Banner.css"
import DropdownTriggerExample from "../TriggerLogin/TriggerLogin"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import 'semantic-ui-css/semantic.min.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { setUserCountry } from "../../store/actions/countryactions";



export const Banner = (props) => {

    const userSingin = useSelector(state => state.userSignin)
    const { userInfo, loading } = userSingin
    const stateComponent2 = useSelector(state => state.reducersActivities.stateComponent)
    const history = useHistory();
    const sendHome = function () {
        history.push('/')
    }
    console.log('ESTE ES EL ESTADO:' + stateComponent2)
    //const userSingin = useSelector(state => state.userSignin)
    // const { userInfo } = userSingin
    const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0()
    const { logout } = useAuth0()

    const userCountry = useSelector(state => state.userCountry) 

    const allcountries = useSelector(state => state.countries)

    const {countries} = allcountries

    const findCountry = countries?.find(c => c.name === userCountry)

    const dispatch = useDispatch()
    
    const location = props.location.pathname

    const handleCountry = () => {
        dispatch(setUserCountry(""))
        window.location.reload();
    }


    return (

        <div className="BannerContainer">
            {stateComponent2 === true ? (
                <div className="Banner">
                    <div class="shake-slow shake-constant shake-constant--hover"><NavLink to="/" className="BannerTitle">LowHenry </NavLink></div>
                    {stateComponent2 === true ? (
                        <div className="NavBarContainer">
                            <Link to="/" className="Links">Inicio</Link>
                            <Link to="/activities" className="Links">Paquete de actividades</Link>
                            <Link to="/experiences" className="Links">Experiencias</Link>
                            <div className="div-img-country-banner">
                            {
                                userCountry && location === '/' && userCountry.length > 1 ?
                                <img height="45px" onClick={() => handleCountry()} className="countries-img" src={`https://www.countryflags.io/${findCountry?.iso2}/flat/64.png`}></img>
                                :
                                <Fragment></Fragment>
                            }
                            </div>                            
                        </div>) : null}
                    {
                        isLoading?
                        <div>Cargando...</div> :
                        userInfo || user ?

                            <DropdownTriggerExample /> :
                            <NavLink onClick={()=>loginWithRedirect()} className="LinkToLogin" to="/">Ingresar</NavLink>

                    }

                </div>) : null}

        </div>

    )
}

export default Banner