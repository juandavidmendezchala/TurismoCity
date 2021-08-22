import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { FaShoppingCart } from "react-icons/fa"
import { MdAttachMoney } from "react-icons/md"
import { BsFillStarFill } from "react-icons/bs"
import { REACT_APP_API } from '../../../store/Consts/Consts';
import { getSalesSup } from '../../../store/actions/actionSupplier/getSalesSupplier'

const HomeAdminPanel = ({ sidebar }) => {

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)
    const user = useSelector((state) => state.userSignin.userInfo.id)
    const data = useSelector(state => state.infoSales.salesUser)
    let ventas = 0;
    let ingresos = 0;


    useEffect(async () => {
        await axios.get(`${REACT_APP_API}/suppliers/sales/${user}`)
            .then(async (response) => {
                dispatch(getSalesSup(response.data))
            })
            .then(setLoading(false))
        // .catch(error => console.log(error))
    }, [])
    data?.map(e => ventas = ventas + e.purchases.length)
    data?.map(e => ingresos = ingresos + (e.purchases.length * e.price))


    console.log(data)

    if (loading) {
        return (
            <p>Cargando ...</p>
        )
    }
    console.log(ingresos)

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
            <div className="graficosSupplier">
                <div className="topSalesUser">
                    Top actividades
                </div>
                <div>
                    Donnut grafico
                </div>
            </div>
        </div>
    )
}

export default HomeAdminPanel
