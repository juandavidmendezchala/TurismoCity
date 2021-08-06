import React from "react"
import "./Banner.css"

export const Banner = () => {
    return (
        <div className="BannerContainer">
        <div className="Banner">
            <div className='algo'>
            <h1 className="BannerTitle">TicketBarato </h1>
            <img src='https://media.giphy.com/media/IdmhVqdlIvpj3EalKg/giphy.gif' type='gif' width={90} height={90} />
            </div>
        </div>
        </div>
    )
}

export default Banner