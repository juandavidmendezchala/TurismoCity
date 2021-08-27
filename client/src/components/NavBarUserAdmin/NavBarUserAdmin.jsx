import React, { useEffect, useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link, useHistory } from "react-router-dom"
import * as IoIcons from "react-icons/io"
import {SidebarDataUserAdmin} from './sidebarDataUserAdmin'

import { IconContext } from 'react-icons'
import { useSelector } from 'react-redux'

const NavBarUserAdmin = ({showSidebar,sidebar}) => {
    // const [sidebar, setSidebar] = useState(true)
    const [estado, setEstado] = useState('HOLA')
    // const showSidebar = () => setSidebar(!sidebar)

    function stayColor(index){
        console.log(estado)
        setEstado(index)
    }
    
    const userSingin = useSelector(state => state.userSignin)
    const { userInfo } = userSingin

    const history = useHistory()

    useEffect(() => {
        if(userInfo?.isAdmin === false) {
            history.push('/')
        }
    }, [])
    

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
                        {/* <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li> */}
                        {SidebarDataUserAdmin.map((item, index) => {
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

export default NavBarUserAdmin