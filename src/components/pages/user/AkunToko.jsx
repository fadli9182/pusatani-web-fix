/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingFetch from "../LoadingFetch";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import { BASE_URL, getAccessToken } from "../../utils/api";
import "./akun.css";

const AkunToko = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [akunToko, setAkunToko] = useState([]);
  const [produks, setProduks] = useState([]);
  const [loading, setLoading] = useState(false);
  const idToko = JSON.parse(localStorage.getItem("id_toko"));

  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  };

  const getaAkunToko = async () => {
    if (idToko == null) return;
    setLoading(true);
    let res = await axios.get(`${BASE_URL}/tokoWith/${idToko}`, config);
    setAkunToko(res.data.data.data);
    setProduks(res.data.data.data.toko_to_produk);
    setLoading(false);
  };
  useEffect(() => {
    getaAkunToko();
  }, []);

  if (loading) {
    return <LoadingFetch />;
  }

  function FormModal(props) {
    const [name, setName] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [stok, setStok] = useState("");

    const addToko = async (e) => {
      e.preventDefault();
      const dataProduk = new FormData();

      dataProduk.append("id_toko", idToko);
      dataProduk.append("name", name);
      dataProduk.append("detail", deskripsi);
      dataProduk.append("price", price);
      dataProduk.append("stok", stok);
      dataProduk.append("image", image);

      try {
        setLoading(true);
        await axios.post(`${BASE_URL}/produk`, dataProduk, config);
        setLoading(false);
        Swal.fire("Berhasil", "Produk Berhasil Ditambahkan", "success");
        getaAkunToko();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    useEffect(() => {
      if (akunToko === null) {
        navigate("/login");
      }
    }, [akunToko, navigate]);

    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Tambah Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={addToko}>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="nama-produk">
                Nama Produk
              </label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="nama-produk" className="form-control form-control-lg" placeholder="Masukan Nama Produk" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="desc-produk">
                Deskripsi
              </label>
              <input value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} type="text" id="desc-produk" className="form-control form-control-lg" placeholder="Masukan deskripsi" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="harga-produk">
                Harga Produk
              </label>
              <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" id="harga-produk" className="form-control form-control-lg" placeholder="500000" />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label d-flex" htmlFor="stok">
                Stok Produk
              </label>
              <select onChange={(e) => setStok(e.target.value)} className="form-select form-control h-50" name="stok" id="stok" defaultValue={"default"}>
                <option value="default">Pilih Stok Produk</option>
                <option value="Tersedia">Tersedia</option>
                <option value="Tidak Tersedia">Tidak Tersedia</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="formFile" className="form-label">
                Foto Produk
              </label>
              <input onChange={(e) => setImage(e.target.files[0])} accept=".jpg, .png, .jpeg" className="form-control h-50" type="file" id="formFile" />
            </div>
            <button className="btn--login w-75">Tambah</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Header />
      <div className="container mt-0 pt-0">
        <h1 className="text-center fw-bold text--green">Toko Anda</h1>
        {!idToko ? (
          <div className="d-flex justify-content-center p-5">
            <h1>Belum Ada produk</h1>
          </div>
        ) : (
          <div className="card mb-5 card--pabrik" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center ">
                <img src={akunToko.image} className="img-fluid p-3" alt="Foto Toko" style={{ height: "200px", width: "300px", borderRadius: "20px" }} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{ textTransform: "capitalize" }}>
                    {akunToko.name}
                  </h5>
                  <p>Pemilik: {akunToko.user_name}</p>
                  <hr />
                  <p className="card-text">Alamat: {akunToko.address}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <section>
          <h1 className="fw-bold text-center text--green">Produk Anda</h1>
          <button className="btn--login my-3" onClick={() => setModalShow(true)}>
            Tambahkan
          </button>
          <div className="row">
            {produks.length <= 0 ? (
              <>
                <div className="d-flex justify-content-center p-5">
                  <h1>Belum Ada produk</h1>
                </div>
              </>
            ) : (
              <>
                {produks.map((produk) => {
                  return (
                    <div key={produk.id} className="col-xl-4 col-md-6 col-sm-12 mb-3">
                      <div className="card mb-3 h-100">
                        <div className="card-header fw-bold" style={{ textTransform: "capitalize" }}>
                          {produk.name}
                        </div>
                        <div className="card-body">
                          <div className="text-center mb-3">
                            <img src={`http://pusatani.masuk.web.id/images/produk/${produk.image}`} alt="Foto Produk" style={{ height: "150px", width: "200px" }} />
                          </div>
                          <h5 className="card-title fw-bold">Detail Produk</h5>
                          <p style={{ textAlign: "justify" }}>{produk.detail}</p>
                          <p style={{ textAlign: "justify" }} className="fw-bold">
                            {produk.stok}
                          </p>
                          <p className="card-text fw-bold">Rp: {produk.price}</p>
                        </div>
                        {/* <div className="d-flex justify-content-center m-2">
                          <a className="btn--login" href={`https://wa.me/$}`}>
                            Hubungi Kami
                          </a>
                        </div> */}
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </section>
      </div>
      <Footer />
      <FormModal backdrop="static" show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AkunToko;
