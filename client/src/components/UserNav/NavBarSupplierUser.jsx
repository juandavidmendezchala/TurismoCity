import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import * as IoIcons from "react-icons/io"
import { SidebarData } from './SidebarDataUser'
import './NavBarSupplierUser.css'
import { IconContext } from 'react-icons'
import { useSelector } from 'react-redux'

const NavBarSupplierUser = ({showSidebar,sidebar}) => {
    // const [sidebar, setSidebar] = useState(true)
    const [estado, setEstado] = useState('HOLA')
    // const showSidebar = () => setSidebar(!sidebar)

    function stayColor(index){
        console.log(estado)
        setEstado(index)
    }

    return (
        <>
            <div className={sidebar?'nav-menus-back active':'nav-menus-back'}></div>
            <IconContext.Provider value={{ color: "fff" }}>
                <div className="navBarSuppliers">
                    <Link to="#" className="menus-bars">
                        <FaIcons.FaBars onClick={()=>showSidebar()} />
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menus active" : "nav-menus"}>
                    <ul className="nav-menus-items" >
                        
                        {SidebarData.map((item, index) => {
                            return (
                                <li className={estado==index?('nav-menus-items-active'):item.cName} key={index} value={index} onClick={()=>stayColor(index)}>
                                    <Link to={item.path} >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBarSupplierUser
