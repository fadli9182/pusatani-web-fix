import React from "react";
import Logo from "../asset/image/Logo.png";
import { Link } from "react-router-dom";
import { BsFillReplyFill } from "react-icons/bs";
import "../asset/css/home.css";

function Register() {
  return (
    <>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-7 d-flex justify-content-center align-item-center py-5 right--login">
          <div className="card shadow align-content-center" style={{ borderRadius: "1rem", width: "500px" }}>
            <div className="card-body py-3 text-center px-5 align-item-center card--login">
              <h3 className="mb-3 text-center">Register</h3>
              <Link to={"/login"} className="d-flex mb-2">
                <BsFillReplyFill />
                Kembali Ke halaman login
              </Link>
              <div className="form-outline mb-4">
                <label className="form-label d-flex" htmlFor="email-login">
                  Email
                </label>
                <input type="email" id="email-login" className="form-control form-control-lg form-float" placeholder="Email Anda" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label d-flex" htmlFor="nomer-login">
                  Nomer Whatsapp
                </label>
                <input type="email" id="nomer-login" className="form-control form-control-lg form-float" placeholder="+62" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label d-flex" for="password-login">
                  Password
                </label>
                <input type="password" id="password-login" className="form-control form-control-lg" placeholder="Masukan Kata Sandi" />
              </div>
              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-start mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form1Example3" />
                <label className="form-check-label" htmlFor="form1Example3">
                  {" "}
                  Ingat Saya{" "}
                </label>
              </div>
              <button className="btn--login w-75">Register</button>
              <hr className="my-4 baris" />
            </div>
          </div>
        </div>
        <div className="col-md-5 login--page-left">
          <div className="row">
            <div className="col-md-4">
              <img className="p-4 pb-0 img-fluid" src={Logo} alt="Logo" width={"160px"} height={"150px"} />
            </div>
            <div className="col-md-8 col-sm-12 pt-3 text--green">
              <h1 style={{ fontSize: "30px" }}>Pusat Informasi Petani</h1>
              <p>Dengan Teknologi memberi solusi untuk Petani</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
