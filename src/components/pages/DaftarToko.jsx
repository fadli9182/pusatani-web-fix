/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../partials/footer/Footer";
import Header from "../partials/header/Header";
import { BASE_URL, deleteToken, getAccessToken, getUser } from "../utils/api";

const DaftarToko = () => {
  const [namaToko, setNamaToko] = useState("");
  const user = useRef(getUser());
  const [addressToko, setAddressToko] = useState("");
  const [deskripsiToko, setDeskripsiToko] = useState("");
  const [phoneToko, setPhoneToko] = useState();
  const [fotoToko, setFotoToko] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  };

  const addToko = async (e) => {
    e.preventDefault();
    const dataToko = new FormData();
    dataToko.append("id_user", user.current.id);
    dataToko.append("name", namaToko);
    dataToko.append("address", addressToko);
    dataToko.append("deskripsi", deskripsiToko);
    dataToko.append("phone", phoneToko);
    dataToko.append("image", fotoToko);
    dataToko.append("status", "Not Verified");

    try {
      setLoading(true);
      let res = await axios.post(`${BASE_URL}/toko`, dataToko, config);
      console.log(res);
      setLoading(false);
      Swal.fire("Berhasil!", "Silahkan Login Ulang", "success");
      deleteToken();
      navigate("/login");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.current == null) {
      navigate("/login");
    }
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h1>Sedang memuat data...</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container my-5 w-75">
        <form onSubmit={addToko}>
          <div className="mb-3">
            <label htmlFor="namaToko" className="form-label">
              Nama Toko
            </label>
            <input onChange={(e) => setNamaToko(e.target.value)} type="text" className="form-control" name="namaToko" id="namaToko" placeholder="Masukan Nama Toko" />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <textarea onChange={(e) => setAddressToko(e.target.value)} type="text" className="form-control" name="alamat" id="alamat" placeholder="Masukan Alamat Toko" />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Deskripsi
            </label>
            <textarea onChange={(e) => setDeskripsiToko(e.target.value)} type="text" className="form-control" name="deskripsi" id="deskripsi" placeholder="Masukan Deskripsi Toko" />
          </div>
          <div className="mb-3">
            <label htmlFor="telp" className="form-label">
              Nomer Telepon
            </label>
            <input onChange={(e) => setPhoneToko(e.target.value)} type="number" className="form-control" name="telp" id="telp" placeholder="+62" />
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Foto Toko
            </label>
            <input onChange={(e) => setFotoToko(e.target.files[0])} accept=".jpg, .png, .jpeg" type="file" className="form-control" name="file" id="file" />
          </div>
          <button className="btn--login w-100">Daftar</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default DaftarToko;
