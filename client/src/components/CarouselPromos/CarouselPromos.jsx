import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import Slider from 'react-slick'
import { useEffect } from "react/cjs/react.development";
// import { getPromos } from "../../store/actions/promosActions";
import { getPromo } from '../../store/actions/promoActions';


const CarouselPromos = () => {

    const Promotions = useSelector(state => state.promotions)

    const dispatch = useDispatch()

    const { loading, promotions } = Promotions

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
        // fade: true,
        infinite: true,
        lazyload: true,
        // speed: 300,
        // centerMode: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,
        // slidesToScroll: 1,
        autoplay: true,
        // speed: 15000,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => SetImageIdx(next),
    };
    return (

        <div className='carrouselFirstPromos'>
            {
                loading && loading?
                <div>Loading</div>
                :
                <Slider {...settings}>
                {promotions?.map((promo, id) => (
                    <div className={id === imageIdx ? 'imageActiveSlidePromos' : 'slidePromos'}>
                        <div className="container-carouselPromos">
                            <h2 className="newstitlePromos">{promo.title}</h2>
                            {/* <img className='imagCarusel' height="150px" src={news.image} alt={news.title} /> */}
                            <p className="newstextPromos">{promo.description}</p>

                        </div>
                    </div>
                ))}
            </Slider>
            }
        </div>
    )
}

export default CarouselPromos
