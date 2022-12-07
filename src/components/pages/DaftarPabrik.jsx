/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../partials/footer/Footer";
import Header from "../partials/header/Header";
import { BASE_URL, deleteToken, getAccessToken, getUser } from "../utils/api";

const DaftarPabrik = () => {
  const [namaPabrik, setNamaPabrik] = useState("");
  const user = useRef(getUser());
  const [loading, setLoading] = useState(false);
  const [addressPabrik, setAddressPabrik] = useState("");
  const [deskripsiPabrik, setDeskripsiPabrik] = useState("");
  const [phonePabrik, setPhonePabrik] = useState();
  const [fotoPabrik, setFotoPabrik] = useState();
  const navigate = useNavigate();

  const idPabrik = localStorage.getItem("id_pabrik");
  console.log(user);

  const config = {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  };

  const addPabrik = async (e) => {
    e.preventDefault();
    const dataPabrik = new FormData();
    dataPabrik.append("id_user", user.current.id);
    dataPabrik.append("name", namaPabrik);
    dataPabrik.append("address", addressPabrik);
    dataPabrik.append("deskripsi", deskripsiPabrik);
    dataPabrik.append("phone", phonePabrik);
    dataPabrik.append("image", fotoPabrik);
    dataPabrik.append("status", "Not Verified");

    try {
      setLoading(true);
      let res = await axios.post(`${BASE_URL}/pabrik`, dataPabrik, config);
      console.log(res);
      Swal.fire("Berhasil!", "Silahkan Login Ulang", "success");
      setLoading(false);
      deleteToken();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user.current == null) {
      navigate("/login");
    } else if (idPabrik !== "null") {
      Swal.fire("Anda Sudah Punya Pabrik", "", "error");
      navigate("/");
    } else if (user.current.roles[0].name !== "Pabrik") {
      Swal.fire("Akun anda Bukan Pabrik", "", "error");
      navigate("/");
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
        <form onSubmit={addPabrik}>
          <div className="mb-3">
            <label htmlFor="namaPabrik" className="form-label">
              Nama Pabrik
            </label>
            <input onChange={(e) => setNamaPabrik(e.target.value)} type="text" className="form-control" name="namaPabrik" id="namaPabrik" placeholder="Masukan Nama Pabrik" />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <textarea onChange={(e) => setAddressPabrik(e.target.value)} type="text" className="form-control" name="alamat" id="alamat" placeholder="Masukan Alamat Pabrik" />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Deskripsi
            </label>
            <textarea onChange={(e) => setDeskripsiPabrik(e.target.value)} type="text" className="form-control" name="deskripsi" id="deskripsi" placeholder="Masukan Deskripsi Pabrik" />
          </div>
          <div className="mb-3">
            <label htmlFor="telp" className="form-label">
              Nomer Telepon
            </label>
            <InputGroup>
              <InputGroup.Text>
                <p className="d-flex align-items-center justify-content-center m-0" style={{ fontSize: "12px" }}>
                  +62
                </p>
              </InputGroup.Text>
              <Form.Control type="number" onChange={(e) => setPhonePabrik(e.target.value)} name="phone" id="phone" />
            </InputGroup>
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Foto Pabrik
            </label>
            <input onChange={(e) => setFotoPabrik(e.target.files[0])} accept=".jpg, .png, .jpeg" type="file" className="form-control h-100" name="file" id="file" />
          </div>
          <button className="btn--login w-100">Daftar</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default DaftarPabrik;
