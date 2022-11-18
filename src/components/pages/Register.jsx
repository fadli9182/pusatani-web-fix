import React, { useState } from "react";
import Logo from "../asset/image/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BASE_URL, getAccessToken } from "../utils/api";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState();
  const [phone, setPhone] = useState();
  const [photo_profile, setProfile] = useState();
  const [photo_id, setPhotoId] = useState();

  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("address", address);
    data.append("role", role);
    data.append("phone", phone);
    data.append("photo_profile", photo_profile);
    data.append("photo_id", photo_id);

    const config = {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    };
    try {
      let res = await axios.post(`${BASE_URL}/auth/signup`, data, config);
      console.log(res);
      alert("daftar berhasil");
      navigate("/");
    } catch (err) {
      // const resJson = JSON.stringify(response.response.data.errors);
      console.log(err.response.data.errors);
      // alert();
    }
  };

  return (
    <>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-7 d-flex justify-content-center align-item-center py-5 right--login">
          <div className="card shadow align-content-center" style={{ borderRadius: "1rem", width: "500px" }}>
            <div className="card-body py-3 text-center px-5 align-item-center card--login">
              <h3 className="mb-3 pt-2 text-center">Register</h3>
              <form onSubmit={registerHandler}>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" htmlFor="name">
                    Nama Lengkap
                  </label>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="form-control h-50" placeholder="Username Anda" />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" htmlFor="email">
                    Email
                  </label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control h-50 " placeholder="Email Anda" />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" htmlFor="password">
                    Password
                  </label>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control h-50" placeholder="Masukan Password" />
                </div>
                <div className="form-outline mb-2">
                  <label htmlFor="address" className="form-label d-flex">
                    Alamat
                  </label>
                  <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" name="address" id="address" rows="3"></textarea>
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" htmlFor="role">
                    Jenis Toko
                  </label>
                  <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select form-control h-50" name="role" id="role" defaultValue={"default"}>
                    <option disabled>Pilih Jenis Toko</option>
                    <option value="2">Pabrik</option>
                    <option value="3">Toko</option>
                  </select>
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" htmlFor="phone">
                    Nomer Telepon
                  </label>
                  <InputGroup className="mb-3 h-50">
                    <InputGroup.Text>+62</InputGroup.Text>
                    <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" id="phone" />
                  </InputGroup>
                </div>

                <div className="form-outline mb-2">
                  <label className="form-label d-flex" htmlFor="photo_profile">
                    Foto Profil
                  </label>
                  <input onChange={(e) => setProfile(e.target.files[0])} accept=".jpg, .png, .jpeg" type="file" name="photo_profile" id="photo_profile" className="form-control h-50" />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label d-flex" htmlFor="photo_id">
                    Foto Identitas
                  </label>
                  <input onChange={(e) => setPhotoId(e.target.files[0])} accept=".jpg, .png, .jpeg" type="file" name="photo_id" id="photo_id" className="form-control h-50" />
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
      </div>
    </>
  );
}

export default Register;
