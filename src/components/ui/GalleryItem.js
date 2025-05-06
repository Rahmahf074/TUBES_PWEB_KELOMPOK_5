import React from "react";

const GalleryItem = ({ image }) => {
  return (
    <div className="gallery-item">
      <img src={image.src} alt={image.alt} className="gallery-img" />
      <div className="gallery-caption bg-success text-white fw-semibold text-center py-2 rounded-bottom">
        {image.caption}
      </div>
    </div>
  );
};

export default GalleryItem;
