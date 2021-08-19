import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsThreeDots } from "react-icons/bs";
import { REACT_APP_API } from '../../../store/Consts/Consts'
import axios from 'axios'
import './sales.css'

const Sales = ({ sidebar }) => {
    const [sales, setSales] = useState()
    const [loading, setLoading] = useState(true)
    const idUser = useSelector(state => state.userSignin.userInfo.id)
    useEffect(async () => {
        await axios.get(`${REACT_APP_API}/suppliers/sales/${idUser}`)
            .then(async (res) => await setSales(res.data))
        setLoading(false)
    }, [])
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
                <h3>Actividad</h3>
                <h3>Ingresos Totales</h3>
                <h3>Detalle de ventas</h3>

            </div>
            {
                sales.map((e, i) =>
                    <div className="containerSales">
                        <p>{i + 1} {e.name}</p>
                        <p>${e.price * e.purchases.length}</p>
                        <div><BsThreeDots /></div>
                    </div>
                )
            }
        </div>
    )
}

export default Sales
