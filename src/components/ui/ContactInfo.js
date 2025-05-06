import React from "react";

const ContactInfo = () => {
  return (
    <div className="mb-4">
      <div className="d-flex align-items-start mb-3">
        <div className="me-3 text-success fs-4">
          <i className="bi bi-geo-alt"></i>
        </div>
        <div>
          <h6 className="fw-bold mb-1">Alamat</h6>
          <p className="text-muted mb-0">
            Jl. Minangkabau Raya No. 123, Kota Bengkulu, Bengkulu
          </p>
        </div>
      </div>

      <div className="d-flex align-items-start mb-3">
        <div className="me-3 text-success fs-4">
          <i className="bi bi-telephone"></i>
        </div>
        <div>
          <h6 className="fw-bold mb-1">Telepon</h6>
          <p className="text-muted mb-0">+62 21 1234 5678</p>
          <p className="text-muted mb-0">+62 857 6809 2518 (WhatsApp)</p>
        </div>
      </div>

      <div className="d-flex align-items-start mb-3">
        <div className="me-3 text-success fs-4">
          <i className="bi bi-envelope"></i>
        </div>
        <div>
          <h6 className="fw-bold mb-1">Email</h6>
          <p className="text-muted mb-0">info@rm_cahaya_minang.com</p>
        </div>
      </div>

      <div className="d-flex align-items-start mb-3">
        <div className="me-3 text-success fs-4">
          <i className="bi bi-clock"></i>
        </div>
        <div>
          <h6 className="fw-bold mb-1">Jam Buka</h6>
          <p className="text-muted mb-0">Senin - Minggu: 10:00 - 22:00 WIB</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
