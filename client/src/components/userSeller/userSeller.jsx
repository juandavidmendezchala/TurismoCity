import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BsThreeDots, BsFillTrashFill } from "react-icons/bs";
import { CgPlayTrackNext } from "react-icons/cg"
//import "./userActivities.css"
//import swal from 'sweetalert'
import swal from 'sweetalert2'

const UserSeller = ({id, name,date,state,type,email}) => {
    const [status, setStatus] = useState(state)
    const [deleted, setDeleted] = useState(false)


    const handleOnClickStatus = async (e) => {
        setStatus(!status)
        await axios.put(`http://localhost:3001/user/${id}/${!status}`)
        //alert('se modficico el estado')
        //swal.fire("Modificado!", "Se modifico correctamente!", "success");
        //Swal.fire('Any fool can use a computer')
        swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const handleDelete = () => {
       /* let eliminar = window.confirm("Estas seguro de borrar esta publicacion? esta accion es PERMANENTE")
        if (eliminar) {
            setDeleted(true)
            await axios.delete(`http://localhost:3001/suppliers/${idUser}/${idPost}`)

        } else {
            return
        }
     */ 
        //alert('Eliminado')
        swal({
            title: "Estas segura?",
            text: "Una vez eliminado, no podrá recuperar este archivo imaginario!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Tu usuario ha sido eliminado!", {
                icon: "success",
              });
            } else {
              swal("Tu usuario esta a salvo!");
            }
          });
    }

    return (
        <>
            {deleted ? <div className="returnDelete">
                Esta publicacion ha sido borrada de manera exitosa
            </div> : < div className="userActivitiesInfo" >
                <div className="namePicture">
                    <img src='https://bysperfeccionoral.com/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.jpg' height="60" alt="img" />
                    <h3>{name}</h3>
                    
                    <span className="moneyDetail">{email}</span>
                </div>
                <div className="detailActivities">
                    <button className={status ? "postActive" : "postDisabled"} onClick={handleOnClickStatus}>{status ? "Activa" : "Desactivado"}</button>
                    <p><span > </span></p>
                </div>
                <div className='uploadStatus'>
                    <div>
                       
                    </div>
                    <button onClick={handleDelete}><BsFillTrashFill /></button>
                    <a href={`/suppliers/post/`}><BsThreeDots /></a>
                </div>
            </div >}

        </>
    )
}

export default UserSeller
