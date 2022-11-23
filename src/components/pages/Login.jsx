import React, { useState } from "react";
import Logo from "../asset/image/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, putAccessToken, putIdPabrik, putIdToko, putUser } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingPage from "../LoadingPage";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function emailChange(e) {
    setEmail(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function isLogin() {
    localStorage.setItem("isLogin", true);
  }

  async function userLogin(e) {
    e.preventDefault();

    try {
      setLoading(true);
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
      console.log(res.data);
      putAccessToken(res.data.data.token);
      putIdPabrik(res.data.data.id_pabrik);
      putIdToko(res.data.data.id_toko);
      putUser(res.data.data.user);
      setUserName(res.data.data.user.name);
      isLogin();
      setEmail("");
      setPassword("");
      setLoading(false);
      console.log(userName);
      console.log(res.data.data);
      console.log(res.data.data.user);
      navigate("/");
      Swal.fire("Berhasil Login!", "Selamat datang di PusaTani", "success");
    } catch (e) {
      console.log(e);
      Swal.fire("Gagal Login!", "Email atau Password salah", "error");
      setLoading(false);
    }
  }
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  if (loading) {
    return (
      // <div className="d-flex justify-content-center align-items-center vh-100">
      //   <div className="spinner-border text-primary" role="status">
      //     <span className="visually-hidden">Loading...</span>
      //   </div>
      // </div>
      <LoadingPage />
    );
  }

  return (
    <>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-5 login--page-left">
          <div className="row login--header">
            <div className="col-xl-4 col-md-12 col-sm-12">
              <Link to={"/"}>
                <img className="p-4" src={Logo} alt="Logo" width={"160px"} height={"150px"} />
              </Link>
            </div>
            <div className="col-xl-8 col-md-12 col-sm-12 pt-4 text--green judul--login">
              <h5>Pusat Informasi Petani</h5>
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
                  <input onChange={emailChange} type="email" id="email-login" className="form-control form-control-lg form-float" placeholder="Email Anda" required />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password-login">
                    Password
                  </label>
                  <input onChange={passwordChange} type={showPassword ? "text" : "password"} id="password-login" className="form-control form-control-lg" placeholder="Masukan Kata Sandi" required />
                  <div className="form-check d-flex justify-content-start mb-4 mt-2">
                    <input onClick={togglePassword} className="form-check-input me-2" type="checkbox" value="" id="checkbox-pwd" />
                    <label className="form-check-label mt-1" style={{ fontSize: "12px" }} htmlFor="checkbox-pwd">
                      Show Password
                    </label>
                  </div>
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
