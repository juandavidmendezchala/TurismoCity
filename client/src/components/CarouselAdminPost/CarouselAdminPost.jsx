import React from "react";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Section from "./Section";
import PromoList from "./PromoList";
import FormPromo from "./FormPromo";
import {deletePromo, getPromo} from "../../store/actions/promoActions";
import { useHistory } from "react-router-dom";

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

    const dispatch = useDispatch()

    const formTitle = "POST PROMOS"

     const removePromo = (id) => {
        dispatch(deletePromo(id))
    } 

    const userSingin = useSelector(state => state.userSignin)
    const { userInfo } = userSingin

    const history = useHistory()

    useEffect(() => {
        if(userInfo?.isAdmin === false) {
            history.push('/')
        }
    }, [])

    useEffect(() => {
        dispatch(getPromo())
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


