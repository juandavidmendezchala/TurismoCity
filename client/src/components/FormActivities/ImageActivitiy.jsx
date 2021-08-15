import React, { useState } from 'react'
import axios from 'axios'
import { Image } from 'cloudinary-react'
import "./imageActivity.css"

const ImageActivitiy = () => {
    const [imgSelected, setImgSelected] = useState()
    const [photoData, setPhotoData] = useState()
    // const [loading, setLoading] = useState()

    const uploadImage = async (e) => {
        e.preventDefault()
        console.log(imgSelected)
        const formData = new FormData()
        formData.append("file", imgSelected)
        formData.append("upload_preset", "kwlcnlpo")
        await axios.post("https://api.cloudinary.com/v1_1/dhqnis6uz/image/upload", formData).then((response) => {
            setPhotoData(response.data.url)
            console.log(response.data.url);
        })
    }

    return (
        <div>

            <form className="formImagePost" action="/pedidos" method="post" encType="multipart/form-data">

                {/* <input name="image" placeholder="Upload a photo" className="container" type="file" /> */}
                <input type="file" className="inputBasicPhoto" name="foto" onChange={(event) => { setImgSelected(event.target.files[0]) }} />
                <br />
                {/* <button className="image" type="submit" value="Create" onClick={(e) => handleOnClick(e)}> Upload Image  </button> */}
                <button className="inputSmall" type="submit" value="Create" onClick={uploadImage} > Upload Image  </button>
                <p  >Loading... </p>
                <Image className='loadedPhoto' cloudName='dhqnis6uz' publicId={photoData} />

            </form>
        </div >
    )
}

export default ImageActivitiy


