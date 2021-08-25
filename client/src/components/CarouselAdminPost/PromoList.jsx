import React from 'react'
import { useSelector } from 'react-redux'
import Promo from './Promo'
import './promoList.css'

const PromoList = ({ list, removePromo }) => {

    const Promotions = useSelector(state => state.promotions)

    const {promotions, loading} = Promotions

    const renderedList = promotions?.map((item, id) => <Promo promoText={item.title} promoInfo={item.description} key={item.id} removePromo={(e) => removePromo(item.id)} />);

    console.log(renderedList, "sdas")
    return (
        <div className="formPromo">
            {renderedList}
        </div>
    )
}

export default PromoList
