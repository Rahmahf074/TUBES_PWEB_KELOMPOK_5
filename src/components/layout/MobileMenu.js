const sectionLabels = {
  home: "Beranda",
  about: "Tentang Kami",
  menu: "Menu",
  gallery: "Galeri",
  testimonials: "Testimoni",
  contact: "Kontak",
};

const MobileMenu = ({ activeSection, handleSectionClick }) => {
  return (
    <div className="d-md-none bg-white shadow-sm border-bottom">
      <div className="container py-3">
        <nav className="d-flex flex-column gap-2">
          {Object.keys(sectionLabels).map((section) => (
            <button
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`btn text-start ${
                activeSection === section
                  ? "btn-success text-white fw-bold"
                  : "btn-outline-success"
              }`}
            >
              {sectionLabels[section]}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
