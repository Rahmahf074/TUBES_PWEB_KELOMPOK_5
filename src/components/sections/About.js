import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="position-relative">
              <div
                className="w-100"
                style={{
                  height: "400px",
                  backgroundImage: "url('/assets/Ab.svg')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "0.5rem",
                }}
              ></div>
              <div
                className="position-absolute d-none d-md-block bg-success text-white p-4 rounded"
                style={{ bottom: "-24px", right: "-24px" }}
              >
                <p className="mb-0 fw-bold">SEJAK</p>
                <h3 className="fw-bold mb-0">1995</h3>
              </div>
            </div>
          </div>

          <div className="col-md-6 ps-md-5">
            <h2 className="text-success fw-bold mb-4">Tentang Kami</h2>
            <p className="text-secondary mb-3">
              Rumah Makan Padang kami telah berdiri sejak tahun 1995, menyajikan
              hidangan Padang otentik dengan resep yang diwariskan turun-temurun
              dari nenek moyang kami yang berasal dari Bukittinggi, Sumatera
              Barat.
            </p>
            <p className="text-secondary mb-3">
              Kami sangat memperhatikan kualitas bahan baku dan kesegaran rempah
              yang digunakan untuk menjamin keaslian cita rasa masakan Padang
              yang kaya akan rempah dan santan.
            </p>
            <p className="text-secondary mb-4">
              Rumah Makan Padang kami telah menjadi destinasi kuliner favorit
              bagi pecinta masakan Padang, baik warga lokal maupun wisatawan
              yang ingin merasakan kelezatan masakan Padang yang sesungguhnya.
            </p>

            {/* Statistik */}
            <div className="row text-center">
              <div className="col-4">
                <div
                  className="p-3 rounded"
                  style={{ backgroundColor: "#f1f1f1" }}
                >
                  <h4 className="text-success fw-bold">100+</h4>
                  <p className="text-muted mb-0">Hidangan Otentik</p>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="p-3 rounded"
                  style={{ backgroundColor: "#f1f1f1" }}
                >
                  <h4 className="text-success fw-bold">5.000+</h4>
                  <p className="text-muted mb-0">Pelanggan Puas</p>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="p-3 rounded"
                  style={{ backgroundColor: "#f1f1f1" }}
                >
                  <h4 className="text-success fw-bold">30</h4>
                  <p className="text-muted mb-0">Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
