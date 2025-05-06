import { ChevronRight, Phone } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="position-relative vh-100 d-flex align-items-center text-white pt-5"
      style={{
        backgroundImage: "url('/assets/latar.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      <div className="container position-relative z-1">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-3">Cita Rasa Asli Padang</h1>
          <p className="lead mb-4">
            Nikmati kelezatan masakan Padang otentik dengan bumbu rempah pilihan
            dan resep warisan turun-temurun.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <button
              onClick={() => scrollToSection("menu")}
              className="btn btn-success d-flex align-items-center"
            >
              Lihat Menu <ChevronRight size={20} className="ms-2" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn btn-light text-success d-flex align-items-center"
            >
              Pesan Sekarang <Phone size={20} className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
