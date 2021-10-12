import { useEffect, useState } from "react";
import Images from "../images/images";
import Loader from "../loader/loader";

import "./gallery.css";

const SECRET_TOKEN = process.env.REACT_APP_SECRET_TOKEN;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    fetch(`http://www.mocky.io/v2/${SECRET_TOKEN}`)
      .then((res) => res.json())
      .then((imageObjs) => {
        setLoading(false);
        setImages(
          imageObjs.map((imgObj) => {
            const { id, urls, alt_description: alt } = imgObj;
            return {
              id,
              alt,
              url: urls.regular,
            };
          })
        );
      });
  };

  return (
    <>
      {!isLoading ? (
        <Images images={images} setExpandedImage={setExpandedImage} />
      ) : (
        <Loader />
      )}

      {/* For Expanded View of Image */}
      {expandedImage && (
        <div className="expanded-img-container">
          <span onClick={() => setExpandedImage(null)}>X</span>
          <img src={expandedImage.url} alt={expandedImage.id} />
        </div>
      )}
    </>
  );
};

export default Gallery;
