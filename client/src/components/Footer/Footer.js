import React from "react";
import { NavLink } from "react-router-dom";
import Newsletter from "../Newsletter/Newsletter";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="FooterContainer">
            <h2 className="FooterHead">LowHenry</h2>
            <h2 className="NewsletterHead">Inscribite a nuestro Newsletter</h2>
            <div className="SeparadorFooter"></div>
            <NavLink className="NavlinkNosotrxs" to="nosotrxs">sobre nosotrxs</NavLink>
            <div className="NewsletterFooter">
                <Newsletter />
            </div>
            <h2 className="ConocenosMas">Conoce mas</h2>
        </div>
    )
}

export default Footer


