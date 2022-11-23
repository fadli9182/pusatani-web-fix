/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import { BASE_URL, config } from "../../utils/api";
import gabah1 from "../../asset/image/gabah1.jpg";

const AkunToko = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [akunToko, setAkunToko] = useState([]);

  const idToko = localStorage.getItem("id_toko");

  const getaAkunToko = async () => {
    let res = await axios.get(`${BASE_URL}/toko/${idToko}`, config);
    setAkunToko(res.data.data);
    console.log(res.data);
    console.log(akunToko);
    console.log(akunToko.name);
  };
  console.log(idToko);
  useEffect(() => {
    getaAkunToko();
  }, []);

  function FormModal(props) {
    const [judul, setJudul] = useState("");
    const [body, setBody] = useState("");
    const [category] = useState();
    const [image, setImage] = useState(null);

    const addToko = async (e) => {
      e.preventDefault();
      const dataArtikel = new FormData();

      dataArtikel.append("title", judul);
      dataArtikel.append("body", body);
      dataArtikel.append("category", category);
      dataArtikel.append("image", image);

      try {
        let res = await axios.post(`${BASE_URL}/article`, dataArtikel, config);

        console.log(res);
        alert("berhasil membuat post");
        Navigate("/admdashboard");
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Tambah Gabah</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={addToko}>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="nama-gabah">
                Nama Gabah
              </label>
              <input value={judul} onChange={(e) => setJudul(e.target.value)} type="text" id="nama-gabah" className="form-control form-control-lg" placeholder="Masukan Nama Gabah" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="desc-gabah">
                Deskripsi
              </label>
              <input value={body} onChange={(e) => setBody(e.target.value)} type="text" id="desc-gabah" className="form-control form-control-lg" placeholder="Masukan deskripsi" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="harga-gabah">
                Harga Gabah
              </label>
              <input value={body} onChange={(e) => setBody(e.target.value)} type="text" id="harga-gabah" className="form-control form-control-lg" placeholder="5.000,00" />
            </div>
            <div className="mb-3">
              <label for="formFile" className="form-label">
                Foto Gabah
              </label>
              <input onChange={(e) => setImage(e.target.files[0])} accept=".jpg, .png, .jpeg" className="form-control h-50  " type="file" id="formFile" />
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
        <h1 className="text-center">Toko Anda</h1>
        {idToko ? (
          <>
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
          </>
        ) : (
          <>
            <h1>Anda Belum Mempunyai Toko</h1>
          </>
        )}
        <section>
          <h1 className="fw-bold text-center">Produk / Permintaan Anda</h1>
          <button className="btn--login my-3" onClick={() => setModalShow(true)}>
            Tambahkan
          </button>
          <div className="row">
            {idToko ? (
              <h1>Belum Ada produk</h1>
            ) : (
              <>
                <div className="col-4">
                  <div className="card mb-3">
                    <div className="card-header fw-bold" style={{ textTransform: "capitalize" }}>
                      Nama Gabah
                    </div>
                    <div className="card-body">
                      <div className="text-center mb-3">
                        <img src={gabah1} alt="Foto Produk" style={{ height: "150px", width: "200px" }} />
                      </div>
                      <h5 className="card-title">Detail Gabah</h5>
                      <p className="card-text">Rp: Harga</p>
                    </div>
                    <div className="d-flex justify-content-center m-2">
                      <a className="btn--login" href={`https://wa.me/$}`}>
                        Hubungi Kami
                      </a>
                    </div>
                  </div>
                </div>
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
