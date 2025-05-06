import React from "react";
import ContactInfo from "../ui/ContactInfo";
import ContactForm from "../ui/ContactForm";

const Contact = () => {
  return (
    <section
      className="bg-light py-5 px-3"
      style={{ backgroundColor: "#fef8eb" }}
    >
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6">
            <h2 className="text-success mb-3 fw-bold">Hubungi Kami</h2>
            <p className="text-muted mb-4">
              Untuk reservasi, pesanan katering, atau pertanyaan lainnya,
              silakan hubungi kami melalui kontak di bawah ini atau kunjungi
              langsung lokasi kami.
            </p>
            <ContactInfo />
            <div className="mt-4">
              <h5 className="fw-semibold mb-2">Ikuti Kami</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-success fs-4">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-success fs-4">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-success fs-4">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-success fw-bold mb-4">Kirim Pesan</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
