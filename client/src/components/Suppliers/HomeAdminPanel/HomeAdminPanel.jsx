import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { FaShoppingCart } from "react-icons/fa"
import { MdAttachMoney } from "react-icons/md"
import { BsFillStarFill } from "react-icons/bs"
import { REACT_APP_API } from '../../../store/Consts/Consts';

const HomeAdminPanel = ({ sidebar }) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState("")
    const user = useSelector((state) => state.userSignin.userInfo.id)
    let ventas = 0;
    let ingresos = 0;


    useEffect(async () => {
        await axios.get(`${REACT_APP_API}/suppliers/sales/${user}`)
            .then(response => setData(response.data))
            .then(setLoading(false))
    }, [])
    // data.map(e => ventas = ventas + e.purchases.length)
    // data?.map(e => ingresos = ingresos + (e.purchases.length * e.price))


    if (loading) {
        return (
            <p>Cargando ...</p>
        )
    }
    console.log(ingresos)
    console.log(data)
    return (
        <div className={`datosHomeAdmin ${sidebar ? "sidebarAbierta" : "sidebarCerrada"}`}>
            <div className="threeColumsInfo">
                <div className="cardInfoSupplier">
                    <div className="datosCantidadesSup blueColor">
                        <p>{ventas}</p>
                        <FaShoppingCart />
                    </div>
                    <div className="containerBarritaSup">
                        <div className="barritaInfoSupplier blueColorBack"></div>
                        <div className="barritaInfoSupplier greyColor"></div>
                    </div>

                    <p>Actividades Vendidas</p>
                </div>
                <div className="cardInfoSupplier">
                    <div className="datosCantidadesSup greenColor">
                        <p>${ingresos}</p>
                        <MdAttachMoney />
                    </div>
                    <div className="containerBarritaSup">
                        <div className="barritaInfoSupplier greenColorBack"></div>
                        <div className="barritaInfoSupplier greyColor"></div>
                    </div>

                    <p>Ingresos Generados</p>
                </div>
                <div className="cardInfoSupplier">
                    <div className="datosCantidadesSup yellowColor">
                        <p>9.86</p>
                        <BsFillStarFill />
                    </div>
                    <div className="containerBarritaSup">
                        <div className="barritaInfoSupplier yellowColorBack"></div>
                        <div className="barritaInfoSupplier greyColor"></div>
                    </div>

                    <p>Puntuacion General</p>
                </div>

            </div>
        </div>
    )
}

export default HomeAdminPanel
