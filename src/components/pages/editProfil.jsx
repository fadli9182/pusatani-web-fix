import React from "react";

const editProfil = () => {
  return (
    <div>
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
            <div className="alert alert-info alert-dismissable">
              {/* <a className="panel-close close" data-dismiss="alert">
                x
              </a> */}
              <i className="fa fa-coffee"></i>
              This is an <strong>.alert</strong>. Use this to show important messages to the user.
            </div>
            <h3>Info Diri</h3>

            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-lg-3 control-label">Nama Awal:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Nama Akhir:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" />
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
                  <input className="form-control" type="text" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <hr />
    </div>
  );
};
export default editProfil;
