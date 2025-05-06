import { Phone, Mail, MapPin } from "lucide-react";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-success text-white py-5">
      <div className="container px-4">
        <div className="row justify-content-between">
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="assets/logorm.svg"
                  alt="Logo Rumah Makan"
                  width="120"
                />
              </div>
              <h2 className="ms-3 h5 fw-bold mb-0">Rumah Makan Padang</h2>
            </div>
            <p className="text-light">
              Menyajikan masakan Padang otentik dengan cita rasa asli dan
              pelayanan memuaskan sejak 1995.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Menu</h5>
            <ul className="list-unstyled">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "menu", label: "Menu" },
                { id: "gallery", label: "Gallery" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <li key={id} className="mb-2">
                  <button
                    onClick={() => scrollToSection(id)}
                    className="btn btn-link p-0 text-light text-decoration-none"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled text-light">
              <li className="d-flex align-items-center mb-2">
                <Phone size={16} className="me-2" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <Mail size={16} className="me-2" />
                <span>info@rm_cahaya_minang.com</span>
              </li>
              <li className="d-flex align-items-center">
                <MapPin size={16} className="me-2" />
                <span>Jl. Minangkabau Raya No. 123, Bengkulu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-top border-light mt-4 pt-3 text-center text-light small">
          &copy; {new Date().getFullYear()} Rumah Makan Padang. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
