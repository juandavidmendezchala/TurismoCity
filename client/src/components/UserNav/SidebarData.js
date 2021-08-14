import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: "Mis Actividades",
        path: "/yourActivities/activities",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },
    {
        title: "Favoritos",
        path: "/yourActivities/favorites",
        icon: <MdIcons.MdFavorite />,
        cName: "nav-text"
    },
    {
        title: "Comentarios",
        path: "/yourActivities/comments",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
]