import React from "react";
import Footer from "../partials/footer/Footer";
import Header from "../partials/header/Header";

const DaftarToko = () => {
  return (
    <>
      <Header />
      <div className="container my-5 w-75">
        <form action="">
          <div className="mb-3">
            <label htmlFor="namaToko" className="form-label">
              Nama Toko
            </label>
            <input type="text" className="form-control" name="namaToko" id="namaToko" placeholder="Masukan Nama Toko" />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <textarea type="text" className="form-control" name="alamat" id="alamat" placeholder="Masukan Alamat Toko" />
          </div>
          <div className="mb-3">
            <label htmlFor="telp" className="form-label">
              Nomer Telepon
            </label>
            <input type="number" className="form-control" name="telp" id="telp" placeholder="+62" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Jenis Toko
            </label>
            <select className="form-select" defaultValue={"default"} name="jenis" id="jenis">
              <option value={"default"}>Pilih Jenis Toko</option>
              <option value="toko">Toko Pupuk</option>
              <option value="pabrik">Pabrik</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Foto KTP
            </label>
            <input type="file" className="form-control" name="file" id="file" />
          </div>
          <button className="btn--login w-100">Daftar</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default DaftarToko;
