import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import { getUser } from "../../utils/api";
import { motion } from "framer-motion";

const EditProfil = () => {
  const [akun, setAkun] = useState({});
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [idAkun, setIdAkun] = useState("");
  const navigate = useNavigate();

  const getAkun = async () => {
    try {
      const res = await getUser();
      // console.log(res);
      setAkun(res);
      setNama(res.name);
      setEmail(res.email);
      setPhone(res.user_details.phone);
      setIdAkun(res.id);
      console.log(idAkun);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAkun();
  }, []);
  console.log(akun);

  useEffect(() => {
    if (akun === null) {
      navigate("/login");
    }
  }, [akun, navigate]);

  return (
    <div>
      <Header />
      <div className="container bootstrap snippets bootdey">
        <h1 className="text-primary fw-bold">Edit Profil</h1>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center mb-5">
              <img src="" className="avatar img-circle img-thumbnail mb-3" alt="avatar" />
              <h6>Upload Foto...</h6>

              <input type="file" className="form-control h-50" />
            </div>
            <div className="list">
              <Link style={{ textDecoration: "none" }} to={"/profilToko"}>
                <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} className="btn--login mb-5 me-3">
                  Lihat Toko Anda
                </motion.button>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/profilPabrik"}>
                <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} className="btn--login">
                  Lihat Pabrik Anda
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="col-md-9 personal-info">
            <h3>Info Diri</h3>
            <hr />

            <form className="form-horizontal ">
              <div className="form-group mb-3">
                <label className="col-lg-3 control-label">Nama Lengkap:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" placeholder={nama} />
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="col-lg-3 control-label">Nomer WhatsApp:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" placeholder={phone} />
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="col-lg-3 control-label">Email:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" placeholder={email} />
                </div>
              </div>
            </form>
          </div>
          <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} className="btn--login my-3">
            Update
          </motion.button>
        </div>
        <hr />
      </div>
      <Footer />
    </div>
  );
};
export default EditProfil;
