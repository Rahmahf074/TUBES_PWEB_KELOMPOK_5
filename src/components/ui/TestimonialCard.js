import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white text-dark p-4 rounded shadow w-100 text-start">
      <div className="mb-3 d-flex justify-content-start">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < testimonial.rating
                ? "text-warning fill-warning me-1"
                : "text-secondary me-1"
            }
          />
        ))}
      </div>
      <p className="fst-italic mb-3">"{testimonial.comment}"</p>
      <p className="fw-bold mb-0">{testimonial.name}</p>
    </div>
  );
};

export default TestimonialCard;
