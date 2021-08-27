import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md";
import * as BIcons from "react-icons/bi";
//BsFillPersonCheckFill
export const SidebarDataUserAdmin = [
    {
        title: "Habilitar Actividad",
        path: "/admin/activityList",
        icon: <BIcons.BiListCheck />,
        cName: "nav-text2"
    },
    {
        title: "Habilitar Recordatorio",
        path: "/admin/emailsend",
        icon: <BIcons.BiLineChartDown />,
        cName: "nav-text2"
    },
    {
        title: "Habilitar Promos",
        path: "/admin/post",
        icon: <BIcons.BiListCheck />,
        cName: "nav-text2"
    },
]