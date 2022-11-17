import React, { useState } from "react";
import Logo from "../asset/image/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, putAccessToken } from "../utils/api";
import axios from "axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function emailChange(e) {
    setEmail(e.target.value);
    console.log(email);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
    console.log(password);
  }

  async function userLogin(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BASE_URL}/auth/login`,
        { email, password },
        {
          headers: {
            // "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      putAccessToken(res.data.data.token);
      setIsLogin(true);
      setEmail("");
      setPassword("");
      alert("berhasil login");
      navigate("/");
    } catch (e) {
      console.log(e);
      alert("Login Gagal");
    }
  }

  return (
    <>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-5 login--page-left">
          <div className="row login--header">
            <div className="col-md-4 col-sm-12">
              <Link to={"/"}>
                <img className="p-4 " src={Logo} alt="Logo" width={"160px"} height={"150px"} />
              </Link>
            </div>
            <div className="col-md-8 col-sm-12 pt-4 text--green">
              <h1 style={{ fontSize: "30px" }}>Pusat Informasi Petani</h1>
              <p>Dengan Teknologi memberi solusi untuk Petani</p>
            </div>
            {/* <div className="col-lg-12 login--page-left " style={{ width: "100%", height: "500px" }}></div> */}
          </div>
        </div>

        <div className="col-md-7 d-flex justify-content-center align-item-center py-5 right--login">
          <div className="card shadow align-content-center" style={{ borderRadius: "1rem", width: "500px" }}>
            <div className="card-body p-5 text-center align-item-center card--login">
              <form onSubmit={userLogin}>
                <h3 className="mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email-login">
                    Email
                  </label>
                  <input onChange={emailChange} type="email" id="email-login" className="form-control form-control-lg form-float" placeholder="Email Anda" />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password-login">
                    Password
                  </label>
                  <input onChange={passwordChange} type="password" id="password-login" className="form-control form-control-lg" placeholder="Masukan Kata Sandi" />
                </div>
                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="checkbox-login" />
                  <label className="form-check-label" htmlFor="checkbox-login">
                    Ingat Saya
                  </label>
                </div>
                <button className="btn--login w-75">Login</button>
              </form>
              <hr className="my-4 baris" />
              <p>
                Belum Mempunyai Akun ? Ayo <Link to="/register">Register!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
