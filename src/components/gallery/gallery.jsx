import { useEffect, useState } from "react";
import Loader from "../loader/loader";

import "./gallery.css";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [expandedImage, setExpandedImage] = useState(null)

    useEffect(() => {

        fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0').then(res => res.json()).then(imageObjs => 
        {setLoading(false);
            setImages(imageObjs.map(imgObj => ({ id: imgObj.id, url: imgObj.urls.regular,alt :imgObj.alt_description })))
        })
    }, [])
    
    return    <>

    {
        !isLoading ? (<div className='gallery'>
                {images.map(image => <img onClick={() =>setExpandedImage(image)} key={image.id} src={image.url} alt={image.alt} />)

                }
        </div>) : <Loader />
    }

{ expandedImage && 
<div className='expanded-image'>
<div className="image-container">
<img src={expandedImage.url} />

</div>
    </div>
}





    </>
    
}

export default Gallery;