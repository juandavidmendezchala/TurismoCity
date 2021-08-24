import React from 'react'
import Promo from './Promo'
import './promoList.css'

const PromoList = ({ list, removePromo }) => {
    console.log(list)
    const renderedList = list?.map((item, id) => <Promo promoText={item.title} promoInfo={item.description} key={item.id} removePromo={(e) => removePromo(item.id)} />);

    console.log(renderedList)
    return (
        <div className="formPromo">
            {renderedList}

        </div>
    )
}

export default PromoList
