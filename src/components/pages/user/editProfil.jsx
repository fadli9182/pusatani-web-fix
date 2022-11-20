import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import { getUser } from "../../utils/api";

const EditProfil = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    function getAuth() {
      const user = getUser();
      setUser(user);
      console.log(user);
      console.log(user.user_details.phone);
    }
    getAuth();
  }, []);
  return user ? (
    <>
      <Header />
      <div className="container bootstrap snippets bootdey">
        <h1 className="text-primary">Edit Profil</h1>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center">
              <img src="" className="avatar img-circle img-thumbnail" alt="avatar" />
              <h6>Upload Foto...</h6>

              <input type="file" className="form-control" />
            </div>
          </div>

          <div className="col-md-9 personal-info">
            <h3>Info Diri</h3>

            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-lg-3 control-label">Nama Lengkap:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" placeholder={user.name} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Nomer WhatsApp:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" placeholder={user.user_details.phone} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Nama Toko/Pabrik</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Email:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" placeholder={user.email} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <hr />
      <Footer />
    </>
  ) : (
    navigate("/login")
  );
};
export default EditProfil;
