import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
// import "./FormActivities.css"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'
// import { signin } from "../../store/actions/userActions";




const CarouselAdminPost = () => {

    const schema = yup.object().shape({
        promo1: yup.string().min(10).max(50).required(),
        moreInfo1: yup.string().min(10).max(50).required(),
        promo2: yup.string().min(10).max(50).required(),
        moreInfo2: yup.string().min(10).max(50).required(),
        promo3: yup.string().min(10).max(50).required(),
        moreInfo3: yup.string().min(10).max(50).required(),
        promo4: yup.string().min(10).max(50).required(),
        moreInfo4: yup.string().min(10).max(50).required(),
        promo5: yup.string().min(10).max(50).required(),
        moreInfo5: yup.string().min(10).max(50).required(),
        promo6: yup.string().min(10).max(50).required(),
        moreInfo6: yup.string().min(10).max(50).required(),
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
                    <b className="inputSm"> PROMO 1 <button className="">  EDIT  </button> </b>

                    <input name="promo1" {...register("promo1")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.promo1?.message}</p>
                    <input name="moreInfo1" {...register("moreInfo1")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.moreInfo1?.message}</p>
                    <b className="inputSm"> PROMO 2 <button>  EDIT  </button>   </b>
                    <input name="promo2" {...register("promo2")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.promo2?.message}</p>
                    <input name="moreInfo2" {...register("moreInfo2")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.moreInfo2?.message}</p>
                    <b className="inputSm"> PROMO 3 <button>  EDIT  </button>   </b>

                    <input name="promo3" {...register("promo3")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.promo3?.message}</p>
                    <input name="moreInfo3" {...register("moreInfo3")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.moreInfo3?.message}</p>
                    <b className="inputSm"> PROMO 4 <button>  EDIT  </button>  </b>


                    <input name="promo4" {...register("promo4")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.promo4?.message}</p>
                    <input name="moreInfo4" {...register("moreInfo4")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.moreInfo4?.message}</p>
                    <b className="inputSm"> PROMO 5  <button>  EDIT  </button>  </b>

                    <input name="promo5" {...register("promo5")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.promo5?.message}</p>
                    <input name="moreInfo5" {...register("moreInfo5")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.moreInfo5?.message}</p>
                    <b className="inputSm"> PROMO 6  <button>  EDIT  </button>   </b>

                    <input name="promo6" {...register("promo6")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.promo6?.message}</p>
                    <input name="moreInfo6" {...register("moreInfo6")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.moreInfo6?.message}</p>

                    <input className="inputSmallButton" type="submit" />
                </form>

            </div>
        </div >
    );
}


export default CarouselAdminPost;


