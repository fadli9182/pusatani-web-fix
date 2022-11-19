import axios from "axios";
import React, { useState } from "react";
import Footer from "../partials/footer/Footer";
import Header from "../partials/header/Header";
import { BASE_URL, getAccessToken } from "../utils/api";

const DaftarToko = () => {
  const [namaToko, setNamaToko] = useState("");
  const [user, setUser] = useState();
  const [addressToko, setAddressToko] = useState("");
  const [phoneToko, setPhoneToko] = useState();
  const [fotoToko, setFotoToko] = useState();
  const [status, setStatus] = useState();

  const navigate = useState();
  const addToko = async (e) => {
    e.preventDefault();
    const dataToko = new FormData();
    dataToko.append("id_user", user);
    dataToko.append("name", namaToko);
    dataToko.append("address", addressToko);
    dataToko.append("phone", phoneToko);
    dataToko.append("image", fotoToko);
    dataToko.append("status", setStatus);
    const config = {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    };
    try {
      let res = await axios.post(`${BASE_URL}/toko`, dataToko, config);
      console.log(res);
      alert("daftar berhasil");
      navigate("/shop");
    } catch (err) {
      // const resJson = JSON.stringify(response.response.data.errors);
      console.log(err.response.data.errors);
      // alert();
    }
  };

  return (
    <>
      <Header />
      <div className="container my-5 w-75">
        <form onSubmit={addToko}>
          <div className="mb-3">
            <label htmlFor="userToko" className="form-label">
              User
            </label>
            <input onChange={(e) => setUser(e.target.value)} type="number" className="form-control" name="userToko" id="userToko" placeholder="" />
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
            <label htmlFor="telp" className="form-label">
              Nomer Telepon
            </label>
            <input onChange={(e) => setPhoneToko(e.target.value)} type="number" className="form-control" name="telp" id="telp" placeholder="+62" />
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
            <label htmlFor="namaToko" className="form-label">
              Status
            </label>
            <input onChange={(e) => setStatus(e.target.value)} type="text" className="form-control" name="namaToko" id="namaToko" placeholder="Masukan Nama Toko" />
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
