import React, { useEffect, useState } from "react";
import "../asset/css/dashboard.css";
import "bootstrap/dist/js/bootstrap.js";
import Logo from "../asset/image/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { BASE_URL, deleteToken } from "../utils/api";

const Admin = () => {
  const [articles, setArticles] = useState([]);

  const navigate = useNavigate();

  async function getArticles() {
    try {
      let res = await axios.get(`${BASE_URL}/article`);
      setArticles(res.data.data);
      console.log(res.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getArticles();
  }, []);

  function adminLogout() {
    deleteToken();
    navigate("/admin");
    alert("berhasil logout");
  }

  const [modalShow, setModalShow] = React.useState(false);
  function FormModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Tambah Artikel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="judul-artikel">
                Judul
              </label>
              <input type="text" id="judul-artikel" className="form-control form-control-lg" placeholder="Judul Artikel" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="nomer-login">
                Isi Artikel
              </label>
              <input type="email" id="nomer-login" className="form-control form-control-lg" placeholder="Masukan isi Artikel" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" for="password-login">
                Kategori
              </label>
              <select className="form-select" name="category" id="category" defaultValue={"default"}>
                <option disabled value="default">
                  Pilih Kategori
                </option>
                <option value="berita">Berita</option>
                <option value="teknologi">Teknologi</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="formFile" className="form-label">
                Foto Artikel
              </label>
              <input className="form-control" type="file" id="formFile" />
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
    <div>
      <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow">
        <Link to={"/"}>
          <img className="m-2 ms-4" src={Logo} alt="logo" width={"50px"} />
        </Link>
        <button className="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item me-3">
            <button onClick={adminLogout} className="btn btn-danger nav-link px-3" style={{ color: "white" }}>
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item mt-3">
                  <a className="nav-link active" aria-current="page" href="/">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tabel-artikel">
                    List Artikel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tabel-toko">
                    List Toko
                  </a>
                </li>
              </ul>

              <hr />
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <h2>List Artikel</h2>
            <button className="btn btn-info" variant="primary" onClick={() => setModalShow(true)}>
              Tambah Artikel
            </button>
            <div className="table-responsive" id="tabel-artikel">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Isi Berita</th>
                    <th scope="col">Kategori</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => {
                    return (
                      <tr>
                        <td>{article.id}</td>
                        <td style={{ fontSize: "10px" }}>{article.image}</td>
                        <td>{article.title}</td>
                        <td className="article--text" style={{ fontSize: "12px" }}>
                          {article.body}
                        </td>
                        <td>{article.id_category}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <button className="btn btn-danger">Delete</button>
                            <button className="btn btn-warning">Edit</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <hr />
            <h2>List Toko</h2>
            <div className="table-responsive" id="tabel-toko">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Foto KTP</th>
                    <th scope="col">Nama Toko</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Jenis Toko</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>"......."</td>
                    <td>Petani Padi padi</td>
                    <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum libero voluptatem expedita dolores, vero minima quam voluptas quae necessitatibus ab?</td>
                    <td>Berita</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-danger">Hapus</button>
                        <button className="btn btn-warning">Verifikasi</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
          <Modal>
            <h1>Hello</h1>
          </Modal>
          <FormModal backdrop="static" show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
