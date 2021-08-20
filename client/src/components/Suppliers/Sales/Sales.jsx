import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineMail } from 'react-icons/hi'
import { REACT_APP_API } from '../../../store/Consts/Consts'
import axios from 'axios'
import './sales.css'

const Sales = ({ sidebar }) => {
    const [sales, setSales] = useState()
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    const idUser = useSelector(state => state.userSignin.userInfo.id)

    useEffect(async () => {
        await axios.get(`${REACT_APP_API}/suppliers/sales/${idUser}`)
            .then(async (res) => await setSales(res.data))
        setLoading(false)
    }, [])

    const handleClickInfo = () => {
        setActive(!active)
    }
    if (loading) {
        return (
            <>
                Cargando...
            </>
        )
    }
    console.log(sales)
    console.log(sales[0].id)
    return (
        <div className={sidebar ? "sidebarAbierta" : "sidebarCerrada"}>
            <h2>Resumen de ventas</h2>
            <div className="containerSales">
                <span><p>Actividad</p></span>
                <div className="infoSales">
                    <span><p>Ingresos Totales</p></span>
                    <span><p>U. Vendidas</p></span>
                </div>
                <span><p>Detalle de ventas</p></span>

            </div>
            {
                sales.map((e, i) =>
                    <>
                        <div className="containerSales">
                            <p>{i + 1} {e.name}</p>
                            <div className="infoSales">
                                <p>${e.price * e.purchases.length}</p>
                                <p>{e.purchases.length}</p>
                            </div>
                            <button onClick={handleClickInfo}><BsThreeDots /></button>
                        </div>
                        {active ? <div className={`containerDetailSales`}>
                            <div className="containerInfoSales">
                                <p><span>Fecha</span></p>
                                <p><span>Consumidor</span></p>
                                <p><span>Informacion de contacto</span></p>
                            </div>
                            {e.purchases.map(e =>
                                <>
                                    <div className="containerInfoSales">
                                        <p>{e.fecha}</p>
                                        <p>{e.user.name}</p>
                                        <a href={`mailto:${e.user.email}`}><HiOutlineMail /></a>
                                    </div>
                                </>
                            )}
                        </div> : <></>}

                    </>
                )
            }
        </div>
    )
}

export default Sales
