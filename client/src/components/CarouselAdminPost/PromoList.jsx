import React from 'react'
import Promo from './Promo'
import './promoList.css'

const PromoList = ({ list, removePromo }) => {
    const renderedList = list.map((item, id) => <Promo promoText={item.promoText} promoInfo={item.promoInfo} key={item.promoText} removePromo={(e) => removePromo(item.id)} />);

    console.log(renderedList)
    return (
        <div className="formPromo">
            {renderedList}

        </div>
    )
}

export default PromoList
