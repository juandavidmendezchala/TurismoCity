import React, { useEffect } from 'react'
import NavBarSupplier from './NavBarSupplier/NavBarSupplier'
import "./NavBarSupplier/userActivities/userActivities.css"
import "./Suppliers.css"


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
