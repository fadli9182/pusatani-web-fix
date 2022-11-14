import React from "react";
import Logo from "../asset/image/Logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="row" style={{ height: "100vh" }}>
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
        <div className="col-md-7 d-flex justify-content-center align-item-center py-5 right--login">
          <div className="card shadow align-content-center" style={{ borderRadius: "1rem", width: "500px" }}>
            <div className="card-body p-5 text-center align-item-center card--login">
              <h3 className="mb-5">Sign in</h3>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email-login">
                  Email
                </label>
                <input type="email" id="email-login" className="form-control form-control-lg form-float" placeholder="Email Anda" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password-login">
                  Password
                </label>
                <input type="password" id="password-login" className="form-control form-control-lg" placeholder="Masukan Kata Sandi" />
              </div>
              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-start mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="checkbox-login" />
                <label className="form-check-label" htmlFor="checkbox-login">
                  {" "}
                  Ingat Saya{" "}
                </label>
              </div>
              <button className="btn--login">Login</button>
              <hr className="my-4 baris" />
              <p>
                Dont Have an account ? Lets <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
