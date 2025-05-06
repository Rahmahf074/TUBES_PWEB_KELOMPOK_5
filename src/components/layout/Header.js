import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const Header = ({ activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSectionClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed-top bg-white shadow-sm">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <div className="d-flex align-items-center">
          <img
            src="assets/logorm.svg"
            alt="Logo Rumah Makan"
            style={{ width: "100px", height: "60px", objectFit: "contain" }}
            className="me-3"
          />
          <h1 className="h5 m-0 text-success fw-bold">Rumah Makan Padang</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="d-none d-md-flex gap-4">
          {["home", "about", "menu", "gallery", "testimonials", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`btn btn-link nav-link-style text-capitalize ${
                  activeSection === section
                    ? "fw-bold text-success"
                    : "text-dark"
                }`}
              >
                {section}
              </button>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="btn d-md-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white border-top d-md-none text-center py-3">
          {["home", "about", "menu", "gallery", "testimonials", "contact"].map(
            (section) => (
              <div key={section} className="mb-2">
                <button
                  onClick={() => handleSectionClick(section)}
                  className="btn btn-link nav-link-style text-dark text-capitalize"
                >
                  {section}
                </button>
              </div>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
