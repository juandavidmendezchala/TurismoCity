import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
    {
        title: "Home",
        path: "/suppliers",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Publica una nueva actividad",
        path: "/suppliers/image",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Actividades Publicadas",
        path: "/suppliers/posts",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },
]