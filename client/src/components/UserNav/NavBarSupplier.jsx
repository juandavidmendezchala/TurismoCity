import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import * as IoIcons from "react-icons/io"
import { SidebarData } from './SidebarData'
import './NavBarSupplier.css'
import { IconContext } from 'react-icons'
import { useSelector } from 'react-redux'

const NavBarSupplier = ({showSidebar,sidebar}) => {
    // const [sidebar, setSidebar] = useState(true)
    const [estado, setEstado] = useState('HOLA')
    // const showSidebar = () => setSidebar(!sidebar)

    function stayColor(index){
        console.log(estado)
        setEstado(index)
    }

    return (
        <>
            <div className={sidebar?'nav-menu-back active':'nav-menu-back'}></div>
            <IconContext.Provider value={{ color: "fff" }}>
                <div className="navBarSupplier">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={()=>showSidebar()} />
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" >
                        {/* <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li> */}
                        {SidebarData.map((item, index) => {
                            return (
                                <li className={estado==index?('nav-menu-items-active'):item.cName} key={index} value={index} onClick={()=>stayColor(index)}>
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

export default NavBarSupplier
