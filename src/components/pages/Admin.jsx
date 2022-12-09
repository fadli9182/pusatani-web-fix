import React, { useEffect, useState } from "react";
import "../asset/css/dashboard.css";
import "bootstrap/dist/js/bootstrap.js";
import Logo from "../asset/image/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { BASE_URL, deleteToken, getAccessToken } from "../utils/api";
import ListToko from "./ListToko";
import ListPabrik from "./ListPabrik";
import Swal from "sweetalert2";

const config = {
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
};

const Admin = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  async function getArticles() {
    try {
      let res = await axios.get(`${BASE_URL}/article`);
      setArticles(res.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getArticles();
  }, []);

  const onDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/article/${id}`, config);
      Swal.fire("Berhasil", "Postingan sudah dihapus", "success");
    } catch (error) {
      console.log(error);
    }
    getArticles();
  };

  function adminLogout() {
    deleteToken();
    navigate("/admin");
    alert("berhasil logout");
  }

  const [modalShow, setModalShow] = React.useState(false);
  function FormModal(props) {
    const [judul, setJudul] = useState("");
    const [body, setBody] = useState("");
    const [category, setCategory] = useState();
    const [image, setImage] = useState(null);

    const addArtikel = async (e) => {
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
        navigate("/admdashboard");
      } catch (error) {
        alert("gagal membuat post");
        console.log(error);
      }
    };

    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Tambah Artikel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={addArtikel}>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="judul-artikel">
                Judul
              </label>
              <input value={judul} onChange={(e) => setJudul(e.target.value)} type="text" id="judul-artikel" className="form-control form-control-lg" placeholder="Judul Artikel" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="isi-artikel">
                Isi Artikel
              </label>
              <textarea rows="3" value={body} onChange={(e) => setBody(e.target.value)} type="text" id="isi-artikel" className="form-control form-control-lg" placeholder="Masukan isi Artikel" />
              {/* <Editor editorState={body} onChange={setBody} /> */}
            </div>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="password-login">
                Kategori
              </label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select" name="category" id="category" defaultValue={"default"}>
                <option disabled value="default">
                  Pilih Kategori
                </option>
                <option value="12">Berita</option>
                <option value="11">Teknologi</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Foto Artikel
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
    <div className="h-100">
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
            <div className="position-sticky pt-3 mb-3 sidebar-sticky">
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
                <li className="nav-item">
                  <a className="nav-link" href="#tabel-pabrik">
                    List pabrik
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
                      <tr key={article.id}>
                        <td>{article.id}</td>
                        <td>
                          <img src={article.image} width={"100px"} alt="foto artikel" />
                        </td>
                        <td>{article.title}</td>
                        <td className="article--text" style={{ fontSize: "12px" }}>
                          {article.body}
                        </td>
                        <td>{article.id_category}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <button onClick={() => onDelete(article.id)} className="btn btn-danger">
                              Delete
                            </button>
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
            <ListToko />
            <ListPabrik />
          </main>
          <FormModal backdrop="static" show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
