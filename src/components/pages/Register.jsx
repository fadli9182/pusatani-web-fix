import React, { useState } from "react";
import Logo from "../asset/image/Logo.png";
import { Link } from "react-router-dom";
import "../asset/css/home.css";

function Register() {
  const BaseUrl = "http://127.0.0.1:8000/api/auth/";

  const [email, setEmail] = useState("");
  const [nomor, setNomor] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-7 d-flex justify-content-center align-item-center py-5 right--login">
          <div className="card shadow align-content-center" style={{ borderRadius: "1rem", width: "500px" }}>
            <div className="card-body py-3 text-center px-5 align-item-center card--login">
              <h3 className="mb-3 pt-2 text-center">Register</h3>
              <form action="">
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" htmlFor="username-login">
                    Username
                  </label>
                  <input type="text" id="username-login" className="form-control form-control-lg form-float" placeholder="Username Anda" />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" htmlFor="email-login">
                    Email
                  </label>
                  <input type="email" id="email-login" className="form-control form-control-lg form-float" placeholder="Email Anda" />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" htmlFor="nomer-login">
                    Nomer Whatsapp
                  </label>
                  <input type="text" id="nomer-login" className="form-control form-control-lg form-float" placeholder="+62" />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" htmlFor="alamat-login">
                    Alamat
                  </label>
                  <input type="text" id="nomer-login" className="form-control form-control-lg form-float" placeholder="+62" />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" for="password-login">
                    Password
                  </label>
                  <input type="password" id="password-login" className="form-control form-control-lg" placeholder="Masukan Kata Sandi" />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" for="password-login">
                    Foto Profil
                  </label>
                  <input type="file" id="password-login" className="form-control form-control-lg" placeholder="Masukan Kata Sandi" />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" for="password-login">
                    Foto Id
                  </label>
                  <input type="file" id="password-login" className="form-control form-control-lg" placeholder="Masukan Kata Sandi" />
                </div>
                <div>
                  <select class="form-select" aria-label="Default select example">
                    <option value="2">Pabrik</option>
                    <option value="3">Toko</option>
                  </select>
                </div>
                <button className="btn--login w-75">Register</button>
              </form>
              <hr className="my-2 baris" />
              <p>
                Sudah Mempunyai Akun ? Ayo <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5 login--page-left">
          <div className="row login--header">
            <div className="col-md-2 col-sm-12">
              <Link to={"/"}>
                <img className="p-2 " src={Logo} alt="Logo" width={"160px"} height={"150px"} />
              </Link>
            </div>
            <div className="col-md-8 col-sm-12 pt-2 text--green">
              <h1 style={{ fontSize: "30px" }}>Pusat Informasi Petani</h1>
              <p>Dengan Teknologi memberi solusi untuk Petani</p>
            </div>
            {/* <div className="col-lg-12 login--page-left " style={{ width: "100%", height: "500px" }}></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
