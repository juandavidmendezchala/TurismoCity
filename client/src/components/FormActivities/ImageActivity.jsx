import React, { useState } from 'react'
import axios from 'axios'
import { Image } from 'cloudinary-react'
import "./imageActivity.css"


const ImageActivity = () => {
    const [imgSelected, setImgSelected] = useState()
    const [photoData, setPhotoData] = useState()
    const [loading, setLoading] = useState(false)

    

    const uploadImage = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(imgSelected)
        const formData = new FormData()
        formData.append("file", imgSelected)
        formData.append("upload_preset", "kwlcnlpo")
        await axios.post("https://api.cloudinary.com/v1_1/dhqnis6uz/image/upload", formData).then((response) => {
            setPhotoData(response.data.url)
            console.log(response.data.url);
            setLoading(false)

//             var txt;
            
//             var r = window.confirm("Foto Cargada con EXITO quieres continuar cargando la actividad? ");
            
// if (r == true) {
//   txt = "You pressed OK!";
// } else {
//   txt = "You pressed Cancel!";
// }
        })
    }
    const formulario = async (e) => {}



    return (
        <div className="divImagePost">

            <form className="formImagePost" action="/pedidos" method="post" encType="multipart/form-data">
            <h1>Comienza cargando una imagen </h1>
            <br />

                {/* <input name="image" placeholder="Upload a photo" className="container" type="file" /> */}
                <input type="file" className="inputBasicPhoto" name="foto" onChange={(event) => { setImgSelected(event.target.files[0]) }} />
                <br />
              <div> {loading && <i className="loadingText"> Cargando... </i>}</div>
               <br />
               
                <button className="inputSmallButton" disabled={loading} type="submit" value="Create" onClick={uploadImage} >  Upload  </button>
                 <br />
                <Image className='loadedPhoto' cloudName='dhqnis6uz' publicId={photoData} />
                <div> {photoData && <button className="inputContinuar " type="submit" value="Create" onClick={formulario} > Continuar </button>}</div>


            </form>
        </div >
    )
}

export default ImageActivity


