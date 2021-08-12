import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
    {
        title: "Home",
        path: "#",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Reports",
        path: "#",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Paquetes de actividades",
        path: "/suppliers/details",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },
]