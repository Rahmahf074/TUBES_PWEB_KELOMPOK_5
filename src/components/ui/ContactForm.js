import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    const whatsappNumber = "6285768092518";
    const text = `Halo, saya ${name}%0AEmail: ${email}%0ATelepon: ${phone}%0APesan: ${message}`;

    alert(
      "Jika pesan tidak muncul otomatis di WhatsApp, silakan ketik ulang secara manual setelah halaman terbuka."
    );

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nama Lengkap
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Masukkan nama lengkap Anda"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Masukkan alamat email Anda"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Nomor Telepon
        </label>
        <input
          type="tel"
          id="phone"
          className="form-control"
          placeholder="Masukkan nomor telepon Anda"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Pesan
        </label>
        <textarea
          id="message"
          rows="4"
          className="form-control"
          placeholder="Masukkan pesan Anda"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-success fw-bold py-2">
        Kirim Pesan via WhatsApp
      </button>
    </form>
  );
};

export default ContactForm;
