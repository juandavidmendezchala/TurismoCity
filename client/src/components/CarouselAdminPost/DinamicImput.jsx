import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
// import "./FormActivities.css"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'
// import { signin } from "../../store/actions/userActions";




const DinamicImput = () => {

    const schema = yup.object().shape({
        promo1: yup.string().min(5).max(50).required(),
        moreInfo1: yup.string().min(5).max(50).required(),

    })

    const user = useSelector(state => state.userSignin)
    const { userInfo } = user
    const { email } = userInfo
    const { token } = userInfo

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });



    // const dispatch = useDispatch();

    // const user = useSelector(state => state.userSignin)
    // useEffect(() => {


    // }, [])

    // var today = new Date().toISOString().split('T')[0];



    return (
        <div className="containerActForm">
            <div className="baseForm">
                <form onSubmit={handleSubmit()} className="form">
                    {/* <b className="inputSm"> PROMO 1 <button className="">  EDIT  </button> </b> */}
                    <input name="promo1" {...register("promo1")} placeholder="Texto PROMO..." className="inputBasicName" />
                    <p className="errorYup">{errors.promo1?.message}</p>
                    <input name="moreInfo1" {...register("moreInfo1")} placeholder="Detalle PROMO..." className="inputBasicName" />
                    <p className="errorYup">{errors.moreInfo1?.message}</p>
                    <input name='Agregar' className="inputSmallButton" type="submit" />
                </form>

            </div>
        </div >
    );
}





export default DinamicImput
