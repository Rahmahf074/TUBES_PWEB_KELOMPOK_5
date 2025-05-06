import React from "react";
import testimonials from "../../data/testimonials";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="bg-success py-5 text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Apa Kata Pelanggan Kami</h2>
        <p className="mb-5 text-muted">
          Pengalaman pelanggan yang telah merasakan kelezatan masakan dan
          pelayanan di Rumah Makan Padang kami.
        </p>

        <div className="d-flex flex-column gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-100">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
