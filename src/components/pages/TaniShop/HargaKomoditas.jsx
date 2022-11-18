import React from "react";
import Foto3 from "../../asset/image/gabah.png";
import Foto4 from "../../asset/image/beras-giling.png";
import Foto5 from "../../asset/image/beras_premium.png";
import Foto6 from "../../asset/image/beras_medium.png";
import Foto7 from "../../asset/image/beras_termurah.png";

const HargaKomoditas = () => {
  return (
    <>
      <div id="galeri">
        <div className="galeri">
          <div className="judul-home text-center">
            <h1>Harga Komoditas Saat Ini</h1>
            <h3>Harga Tigkat Pengecer</h3>
          </div>
          <div className="foto">
            <div className="row text-center">
              <div className="col-md-6 com-sm-12">
                <div className="foto1">
                  <img src={Foto3} alt="" />
                  <div className="deskripsi">
                    <h3>Gabah Tigkat Petani</h3>
                    <hr />
                    <p>Rp. 4.550/Kg</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 com-sm-12">
                <div className="foto1">
                  <img src={Foto4} alt="" />
                  <div className="deskripsi">
                    <h3>Beras di penggilingan</h3>
                    <hr />
                    <p>Rp. 8.800/Kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="judul-home mt-5 mb-5 text-center">
            <h3>Harga Tigkat Pengecer</h3>
          </div>
          <div className="foto">
            <div className="row text-center">
              <div className="col-md-4 com-sm-12">
                <div className="foto1">
                  <img src={Foto5} alt="" />
                  <div className="deskripsi">
                    <h3>Beras Premium</h3>
                    <hr />
                    <p>Rp. 12.000/Kg</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 com-sm-12">
                <div className="foto1">
                  <img src={Foto6} alt="" />
                  <div className="deskripsi">
                    <h3>Beras Medium</h3>
                    <hr />
                    <p>Rp. 10.500/Kg</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 com-sm-12">
                <div className="foto1">
                  <img src={Foto7} alt="" />
                  <div className="deskripsi">
                    <h3>Beras Termurah</h3>
                    <hr />
                    <p>Rp. 9.000/Kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HargaKomoditas;
