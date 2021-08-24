import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCountries, setUserCountry} from '../../store/actions/countryactions'
import './YourCountry.css'

export default function YourCountry({children}) {

    const [isOpen, setIsOpen] = useState(true)

    const onClose = () => {
        setIsOpen(false)
    }

    const dispatch = useDispatch();

    const allcountries = useSelector(state => state.countries)

    const setCountry = (country) => {
        dispatch(setUserCountry(country))
        setIsOpen(false)
        alert(`Haz elegido ${country}, ¡Bienvenido!`)
    }

    const {countries, loading} = allcountries;

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    return(
        <div className={`country ${isOpen && 'is-open'}`}>
            <div className="country-container">
                <button className="country-close" onClick={onClose}>X</button>
                <h5>Por favor, selecciona tu país:</h5>
                {
                    countries?.map(c => (
                        <div className="countries-list" onClick={e => setCountry(c.name)}>
                        <img className="countries-img" src={`https://www.countryflags.io/${c.iso2}/flat/64.png`}></img>
                        <ul className="countries-name">{c.name}</ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}