import React, { useEffect } from 'react'
import NavBarSupplier from './NavBarSupplier/NavBarSupplier'
import FormActivities from '../FormActivities/FormActivities'
import "./NavBarSupplier/userActivities/userActivities.css"



const Suppliers = ({ sidebar, showSidebar }) => {

    return (
        <>
            <div className="adminPanel">
                <NavBarSupplier sidebar={sidebar} showSidebar={showSidebar} />
            </div >
        </>
    )
}

export default Suppliers
