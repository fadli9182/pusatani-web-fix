import React from "react";
import "../asset/css/dashboard.css";
import "bootstrap/dist/js/bootstrap.js";
import Logo from "../asset/image/Logo.png";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Admin = () => {
  const [modalShow, setModalShow] = React.useState(false);
  function FormModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Tambah Artikel
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="judul-artikel">
                Judul
              </label>
              <input
                type="text"
                id="judul-artikel"
                className="form-control form-control-lg"
                placeholder="Judul Artikel"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" htmlFor="nomer-login">
                Isi Artikel
              </label>
              <input
                type="email"
                id="nomer-login"
                className="form-control form-control-lg"
                placeholder="Masukan isi Artikel"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" for="password-login">
                Kategori
              </label>
              <select
                className="form-select"
                name="category"
                id="category"
                defaultValue={"default"}
              >
                <option disabled value="default">
                  Pilih Kategori
                </option>
                <option value="berita">Berita</option>
                <option value="teknologi">Teknologi</option>
              </select>
            </div>
            <div className="form-outline mb-4">
              <label className="form-label d-flex" for="foto-artikel">
                Foto Artikel
              </label>
              <input type="file" className="form-file" id="foto-artikel" />
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
      <header class="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow">
        <Link to={"/"}>
          <img className="m-2 ms-4" src={Logo} alt="logo" width={"50px"} />
        </Link>
        <button
          class="navbar-toggler d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-nav">
          <div class="nav-item me-3">
            <a class="btn btn-danger nav-link px-3" href="/" style={{color: 'white'}}>
              Sign out
            </a>
          </div>
        </div>
      </header>

      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="position-sticky pt-3 sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item mt-3">
                  <a class="nav-link active" aria-current="page" href="/">
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    List Artikel
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    List Toko
                  </a>
                </li>
              </ul>

              <hr />
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
              </div>
            </div>
            <h2>List Artikel</h2>
            <button
              className="btn btn-info"
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              Tambah Artikel
            </button>
            <div class="table-responsive">
              <table class="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Keterangan</th>
                    <th scope="col">Kategori</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>"......."</td>
                    <td>Petani Padi padi</td>
                    <td>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nostrum libero voluptatem expedita dolores, vero minima
                      quam voluptas quae necessitatibus ab?
                    </td>
                    <td>Berita</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-danger">Delete</button>
                        <button className="btn btn-warning" >Edit</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr/>
            <h2>List Toko</h2>
            <div class="table-responsive">
              <table class="table table-striped table-sm">
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
                    <td>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nostrum libero voluptatem expedita dolores, vero minima
                      quam voluptas quae necessitatibus ab?
                    </td>
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
          <FormModal
            backdrop="static"
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
