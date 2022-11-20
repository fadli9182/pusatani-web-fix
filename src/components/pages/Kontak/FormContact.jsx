import React, { useState } from "react";
import Swal from "sweetalert2";

const FormContact = () => {
  const [pesanEmail, setPesanEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const kirimPesan = (e) => {
    e.preventDefault();
    setPesanEmail("");
    setPesan("");
    Swal.fire("Terima Kasih", "Pesan Anda Sudah Terkirim!", "success");
  };

  return (
    <>
      <div className="col-md-12 form--contact text-center">
        <h3 className="text--green mt-5 mb-3" style={{ fontWeight: "700" }}>
          Silahkan Kirim Pesan <br /> dan Masukan Untuk Kami
        </h3>
        <form onSubmit={kirimPesan} style={{ color: "#2c774b" }}>
          <div className="mb-3">
            <label htmlFor="email-contact" className="form-label d-flex">
              Email
            </label>
            <input value={pesanEmail} onChange={(e) => setPesanEmail(e.target.value)} type="email" className="form-control" name="email" id="email-contact" placeholder="Masukan Email Anda" required />
          </div>
          <div className="mb-3">
            <label htmlFor="pesan-contact" className="form-label d-flex">
              Pesan
            </label>
            <textarea value={pesan} onChange={(e) => setPesan(e.target.value)} className="form-control" name="pesan" id="pesan-contact" rows="6" style={{ height: "10rem" }} required />
          </div>
          <button className="btn--login w-100">Kirim</button>
        </form>
      </div>
    </>
  );
};

export default FormContact;
