import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../asset/image/Logo.png";
import { BASE_URL, putAccessToken } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingFetch from "./LoadingFetch";

const AdminLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  function emailChange(e) {
    setEmail(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  async function loginAdmin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${BASE_URL}/auth/login`,
        { email, password },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      putAccessToken(res.data.data.token);
      setEmail("");
      setPassword("");
      setLoading(false);
      Swal.fire("Berhasil", "Login Berhasil", "success");
      navigate("/admdashboard");
    } catch (err) {
      setErrMsg(err.response.data.meta.message);
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingFetch />;
  }

  return (
    <div style={{ height: "100vh" }}>
      <form onSubmit={loginAdmin}>
        <Link to={"/"}>
          <img src={Logo} alt="logo" width={"90px"} style={{ marginTop: "20px", marginLeft: "50px" }} />
        </Link>
        <div className="container d-flex justify-content-center my-2">
          <div className="card shadow justify-content-center align-content-center" style={{ borderRadius: "1rem", width: "500px" }}>
            <div className="card-body p-5 text-center align-item-center card--login">
              <h3 className="mb-5 text--green fs-2">Admin</h3>
              <p style={{ color: "red", padding: "10px" }}>{errMsg}</p>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email-login">
                  Email
                </label>
                <input value={email} onChange={emailChange} type="email" id="email-login" className="form-control form-control-lg form-float" placeholder="Email" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password-login">
                  Password
                </label>
                <input value={password} onChange={passwordChange} type="password" id="password-login" className="form-control form-control-lg" placeholder="Masukan Kata Sandi" />
              </div>
              <button className="btn--login">Login</button>
              <hr className="my-4 baris" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
