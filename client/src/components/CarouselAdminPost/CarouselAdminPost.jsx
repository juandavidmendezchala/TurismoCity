import React from "react";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
// import "./FormActivities.css"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'
import DinamicImput from "./DinamicImput";
import Section from "./Section";
import PromoList from "./PromoList";
import FormPromo from "./FormPromo";
import {getPromo} from "../../store/actions/promoActions";
// import { signin } from "../../store/actions/userActions";

// ESTE ESL EL ARRAY HARDCODEADO QUE HAY QUE TRAER DEL BACK
const list = [
    {
        promoText: "test #1",
        promoInfo: "info #1",
        id: 1
    },
    {
        promoText: "test #2",
        promoInfo: "info #2",
        id: 2
    },
    {
        promoText: "test #3",
        promoInfo: "info #3",
        id: 3
    }]


const CarouselAdminPost = () => {

    const Promotions = useSelector(state => state.promotions)

    const {promotions, loading} = Promotions

    const dispatch = useDispatch()

    const formTitle = "POST PROMOS"
    const [promoList, setPromoList] = useState(promotions)

     const removePromo = (id) => {
        setPromoList((oldList) => oldList.filter((item) => item.id !== id))

    } 

    useEffect(() => {
        dispatch(getPromo())
        console.log(promotions, "carouseladmin")
    }, [])


    return (
        <div className="formPromo">
            <Section><h1>{formTitle}</h1> </Section>
            <Section><FormPromo/></Section>
            <Section><PromoList removePromo={removePromo}/></Section>
        </div >
    );
}


export default CarouselAdminPost;


