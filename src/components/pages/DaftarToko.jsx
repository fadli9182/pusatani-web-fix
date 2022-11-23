import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingPage from "../LoadingPage";
import Footer from "../partials/footer/Footer";
import Header from "../partials/header/Header";
import { BASE_URL, deleteToken, getAccessToken } from "../utils/api";

const DaftarToko = () => {
  const [namaToko, setNamaToko] = useState("");
  const [user, setUser] = useState();
  const [addressToko, setAddressToko] = useState("");
  const [deskripsiToko, setDeskripsiToko] = useState("");
  const [phoneToko, setPhoneToko] = useState();
  const [fotoToko, setFotoToko] = useState();
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);

  const pemilik = JSON.parse(localStorage.getItem("user"));
  // console.log(pemilik);

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
  // console.log(user);

  const navigate = useNavigate();
  const addToko = async (e) => {
    e.preventDefault();
    const dataToko = new FormData();
    dataToko.append("id_user", user);
    dataToko.append("name", namaToko);
    dataToko.append("address", addressToko);
    dataToko.append("deskripsi", deskripsiToko);
    dataToko.append("phone", phoneToko);
    dataToko.append("image", fotoToko);
    dataToko.append("status", status);
    setLoading(true);

    try {
      let res = await axios.post(`${BASE_URL}/toko`, dataToko, config);
      console.log(res);
      console.log(status);
      setLoading(false);
      Swal.fire("Berhasil!", "Silahkan Login Ulang", "success");
      deleteToken();
      navigate("/login");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Header />
      <div className="container my-5 w-75">
        <form onSubmit={addToko}>
          <div className="mb-3">
            <label htmlFor="userToko" className="form-label">
              Pemilik
            </label>
            <input disabled type="text" className="form-control" name="userToko" id="userToko" placeholder={pemilik.name} />
          </div>
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
