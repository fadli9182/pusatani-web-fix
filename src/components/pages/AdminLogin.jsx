import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../asset/image/Logo.png";
import { BASE_URL, putAccessToken } from "../utils/api";
import axios from "axios";

const AdminLogin = () => {
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

  async function loginAdmin(e) {
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
      setEmail("");
      setPassword("");
      alert("berhasil login");
      navigate("/admdashboard");
    } catch (err) {
      console.log(err.response.data.meta.message);

      alert(e.response.data.meta.message);
    }
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
    </>
  );
};

export default AdminLogin;
