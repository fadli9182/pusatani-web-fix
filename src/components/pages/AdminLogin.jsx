import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../asset/image/Logo.png";

const AdminLogin = () => {
  const navigate = useNavigate();

  function loginAdmin() {
    navigate("/admdashoard");
  }

  return (
    <>
      <form onSubmit={loginAdmin}>
        <img src={Logo} alt="logo" width={"90px"} style={{ marginTop: "20px", marginLeft: "50px" }} />
        <div className="container d-flex justify-content-center my-2">
          <div className="card shadow justify-content-center align-content-center" style={{ borderRadius: "1rem", width: "500px" }}>
            <div className="card-body p-5 text-center align-item-center card--login">
              <h3 className="mb-5">Admin</h3>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email-login">
                  Email
                </label>
                <input type="email" id="email-login" className="form-control form-control-lg form-float" placeholder="Email" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password-login">
                  Password
                </label>
                <input type="password" id="password-login" className="form-control form-control-lg" placeholder="Masukan Kata Sandi" />
              </div>
              <button className="btn--login">Login</button>
              <hr className="my-4 baris" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminLogin;
