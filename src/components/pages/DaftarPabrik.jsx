import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../partials/footer/Footer";
import Header from "../partials/header/Header";
import { BASE_URL, getAccessToken } from "../utils/api";

const DaftarPabrik = () => {
  const [namaPabrik, setNamaPabrik] = useState("");
  const [user, setUser] = useState();
  const [addressPabrik, setAddressPabrik] = useState("");
  const [deskripsiPabrik, setDeskripsiPabrik] = useState("");
  const [phonePabrik, setPhonePabrik] = useState();
  const [fotoPabrik, setFotoPabrik] = useState();
  const [status, setStatus] = useState();

  const pemilik = JSON.parse(localStorage.getItem("user"));

  const config = {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    setUser(pemilik.id);
    setStatus("Not Verified");
  }, [pemilik.id]);
  console.log(user);

  const navigate = useState();
  const addPabrik = async (e) => {
    e.preventDefault();
    const dataPabrik = new FormData();
    dataPabrik.append("id_user", user);
    dataPabrik.append("name", namaPabrik);
    dataPabrik.append("address", addressPabrik);
    dataPabrik.append("deskripsi", deskripsiPabrik);
    dataPabrik.append("phone", phonePabrik);
    dataPabrik.append("image", fotoPabrik);
    dataPabrik.append("status", status);

    try {
      let res = await axios.post(`${BASE_URL}/pabrik`, dataPabrik, config);
      console.log(res);
      console.log(status);
      alert("daftar berhasil");
      navigate("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="container my-5 w-75">
        <form onSubmit={addPabrik}>
          <div className="mb-3">
            <label htmlFor="userToko" className="form-label">
              Pemilik
            </label>
            <input disabled type="text" className="form-control" name="userToko" id="userToko" placeholder={pemilik.name} />
          </div>
          <div className="mb-3">
            <label htmlFor="namaToko" className="form-label">
              Nama Pabrik
            </label>
            <input onChange={(e) => setNamaPabrik(e.target.value)} type="text" className="form-control" name="namaToko" id="namaToko" placeholder="Masukan Nama Toko" />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <textarea onChange={(e) => setAddressPabrik(e.target.value)} type="text" className="form-control" name="alamat" id="alamat" placeholder="Masukan Alamat Toko" />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Deskripsi
            </label>
            <textarea onChange={(e) => setDeskripsiPabrik(e.target.value)} type="text" className="form-control" name="deskripsi" id="deskripsi" placeholder="Masukan Deskripsi Toko" />
          </div>
          <div className="mb-3">
            <label htmlFor="telp" className="form-label">
              Nomer Telepon
            </label>
            <input onChange={(e) => setPhonePabrik(e.target.value)} type="number" className="form-control" name="telp" id="telp" placeholder="+62" />
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Foto Pabrik
            </label>
            <input onChange={(e) => setFotoPabrik(e.target.files[0])} accept=".jpg, .png, .jpeg" type="file" className="form-control" name="file" id="file" />
          </div>
          <button className="btn--login w-100">Daftar</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default DaftarPabrik;
