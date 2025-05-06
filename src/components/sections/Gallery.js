import React from "react";
import GalleryItem from "../ui/GalleryItem";
import galleryImages from "../../data/galleryImages";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container text-center mb-5">
        <div className="gallery-header ">
          <h2 className="text-success fw-bold">Galeri Kami</h2>
          <p className="text-muted">
            Lihat beberapa hidangan spesial dan suasana rumah makan kami yang
            nyaman.
          </p>
        </div>

        <div className="gallery-grid ">
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
