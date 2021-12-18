import "./images.css";

// It takes images as prop and renders it to DOM
const Images = ({ images, setExpandedImage, setImages, dragId, setDragId }) => {
  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBox = images.find((box) => box.id === dragId);
    const dropBox = images.find((box) => box.id === ev.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = images.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    setImages(newBoxState);
  };
  return (
    <div className="row d-flex">
      {images
        .sort((a, b) => a.order - b.order)
        .map((image) => {
          const { id, alt, url } = image;
          return (
            <div
              className="col-12 col-md-4 img-fluid p-2"
              key={id}
              id={id}
              style={{
                height: 300,
              }}
              draggable={true}
              onDragOver={(ev) => ev.preventDefault()}
              onDragStart={handleDrag}
              onDrop={handleDrop}
            >
              <img
                className="w-100 h-100 border border-success rounded"
                onClick={() => {
                  // setExpandedImage(image)
                }}
                src={url}
                alt={alt}
                style={{
                  objectFit: "cover",
                  cursor: "grab",
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Images;
