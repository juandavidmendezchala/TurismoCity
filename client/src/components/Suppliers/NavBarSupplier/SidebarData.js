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
        title: "Publica una nueva actividad",
        path: "/suppliers/posts",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Actividades Publicadas",
        path: "/suppliers/details",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },
]