import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineMail } from 'react-icons/hi'
import { REACT_APP_API } from '../../../store/Consts/Consts'
import axios from 'axios'
import './sales.css'
import { InfoSale } from './InfoSale';

const Sales = ({ sidebar }) => {
    const [sales, setSales] = useState([])
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    const idUser = useSelector(state => state.userSignin.userInfo.id)

    useEffect(() => {
        axios.get(`${REACT_APP_API}/suppliers/sales/${idUser}`)
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

    return (
        <div className={sidebar ? "sidebarAbierta" : "sidebarCerrada"}>
            <h2>Resumen de ventas</h2>
            <div className="containerSales  description">
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
                            <p><span id="numVenta">{i + 1}</span> {e.name}</p>
                            <div className="infoSales">
                                <p>${e.price * e.purchases.length}</p>
                                <p>{e.purchases.length}</p>
                            </div>
                            <button onClick={handleClickInfo}><BsThreeDots /></button>
                        </div>
                        <div className={active ? "detailActivo containerInfoSales" : "detailInactivo"}>
                            <p><span>Fecha</span></p>
                            <p><span>Consumidor</span></p>
                            <p><span>Informacion de contacto</span></p>
                        </div>
                        {
                            e.purchases.map(e =>
                                <InfoSale active={active} name={e.user.name} mail={e.user.email} fecha={e.fecha} />
                            )}
                        {/* <div className={`${active ? "" : "disabled"}`}>
                            
                            {e.purchases.map(e =>
                                <>
                                    <div className="containerInfoSales">
                                        <p>{e.fecha}</p>
                                        <p>{e.user.name}</p>
                                        <a href={`mailto:${e.user.email}`}><HiOutlineMail /></a>
                                    </div>
                                </>
                            )
                            }</div> */}

                    </>
                )
            }
        </div>
    )
}

export default Sales
