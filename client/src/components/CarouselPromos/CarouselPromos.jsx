import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import Slider from 'react-slick'
import { useEffect } from "react/cjs/react.development";
// import { getPromos } from "../../store/actions/promosActions";
import { getPromo } from '../../store/actions/promoActions';
import './carouselPromos.css'
// import image1 from './LOWHENRY1.png'
import image2 from './LOWHENRY2.png'
import image3 from './LOWHENRY3.png'
import image4 from './LOWHENRY4.png'
import image5 from './LOWHENRY5.png'

const promos = [
    { title: '12 CUOTAS SIN INTERES CON TODOS LOS BANCOS', description: 'EN TODAS LA ACTIVIDADES DE ARGENTINA' }, { title: '20% CON BANCO GALICIA', description: 'EN TODAS LA ACTIVIDADES DE ARGENTINA' }, { title: '2X1 PAGA UNO DISFRUTAN 2', description: 'EN TODAS LA ACTIVIDADES EN LA NIEVE' }, { title: '24 CUOTAS CON INTERES CON TARJETA', description: 'EN TODAS LA ACTIVIDADES EN AFRICA' },
]

const CarouselPromos = () => {
    const array = [image2, image3, image4, image5]
    const Promotions = useSelector(state => state.promotions)

    const dispatch = useDispatch()

    const { loading, promotions } = Promotions

    useEffect(() => {
        async function fetchData() {
            await dispatch(getPromo())
          }
          fetchData();
    }, [])

    const NextArrow = ({ onClick }) => {
        return (
            <div className='arrow nextP' onClick={onClick}>
                ↪
            </div>
        )
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className='arrow prevP' onClick={onClick}>
                ↩
            </div>
        )
    }
    const [imageIdx, SetImageIdx] = useState(0);





    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        lazyload: true,
        // speed: 300,
        // centerMode: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 15000,
        autoplaySpeed: 2500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => SetImageIdx(next),
    };
    return (

        <div className='carrouselFirstPromos'>
            <Slider {...settings}>
                {promotions?.map((promo, id) => (
                    <div className='imageActiveSlidePromos'>
                        <div className="container-carouselPromos">
                            <img className='imagCarusel' height="150px" src={array[id]} />
                            <h2 className="newstitlePromos">{promo.title}</h2>
                            <p className="newstextPromos">{promo.description}</p>

                        </div>
                    </div>
                ))
                }
            </Slider>
        </div>
    )
}

export default CarouselPromos
