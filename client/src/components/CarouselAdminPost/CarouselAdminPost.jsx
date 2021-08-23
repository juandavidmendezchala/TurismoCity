import React from "react";
import { useForm } from "react-hook-form";
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
// import { signin } from "../../store/actions/userActions";




const CarouselAdminPost = () => {
    const formTitle = "POST PROMOS"



    return (
        <div className="formPromo">
            <Section><h1>{formTitle}</h1> </Section>
            <Section><FormPromo /></Section>
            <Section><PromoList /></Section>
        </div >
    );
}


export default CarouselAdminPost;


