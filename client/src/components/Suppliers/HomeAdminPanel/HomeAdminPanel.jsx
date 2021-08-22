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
import { Doughnut } from 'react-chartjs-2';

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

    let nameUnit = []
    data.map(e => nameUnit.push(e.name))
    let ingresoUnit = []
    data.map(e => ingresoUnit.push(e.price * e.purchases.length))

    console.log(data)
    if (loading) {
        return (
            <p>Cargando ...</p>
        )
    }
    // Informacion para el grafico 
    const grafico = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: nameUnit,
        datasets: [
            {
                label: '# of Votes',
                data: ingresoUnit,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
            },
        ],
        className: "graficoSupplier"
    };
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
                <div className="graficoSupplier">
                    <p>Ingresos por actividad</p>
                    <Doughnut data={grafico} />
                </div>
            </div>
        </div>
    )
}

export default HomeAdminPanel
