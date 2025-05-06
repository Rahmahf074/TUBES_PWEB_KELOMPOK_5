import React from "react";
import MenuCard from "../ui/MenuCard";
import { Phone } from "react-feather";

const Menu = ({ menuItems, scrollToSection }) => {
  return (
    <section id="menu" className="py-5" style={{ backgroundColor: "#fef8eb" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success mb-3">Menu Spesial Kami</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Nikmati berbagai hidangan khas Padang yang dimasak dengan bumbu
            rempah pilihan dan cara tradisional untuk menjaga keaslian rasa.
          </p>
        </div>

        {menuItems.map((category, index) => (
          <div key={index} className="mb-5">
            <h3 className="text-success border-bottom pb-2 mb-4">
              {category.category}
            </h3>
            <div className="row g-4">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="col-12 col-md-6">
                  <MenuCard item={item} />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-5">
          <p
            className="text-muted"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Semua hidangan disajikan dengan nasi putih dan sambal. Tersedia juga
            paket keluarga dan katering untuk acara spesial.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn btn-success text-light d-flex justify-content-center align-items-center mx-auto mt-4"
            style={{ maxWidth: "250px" }}
          >
            Pesan Sekarang <Phone size={20} className="ms-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
