import "./images.css";

// It takes images as prop and renders it to DOM
const Images = ({ images, setExpandedImage }) => (
  <div className="images">
    {images.map((image) => {
      const { id, alt, url } = image;
      return (
        <img
          onClick={() => setExpandedImage(image)}
          key={id}
          src={url}
          alt={alt}
        />
      );
    })}
  </div>
);

export default Images;
