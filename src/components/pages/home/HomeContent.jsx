import React from "react";
import { Link } from "react-router-dom";
import Card from "../../asset/image/card.png";

const HomeContent = () => {
  return (
    <>
      <section style={{ margin: "30px 10px" }}>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-lg-4 col-md-6 col-sm-6 my-3 d-flex justify-content-center">
            <div className="card text-light g-3" style={{ width: "18rem" }}>
              <img src={Card} className="card-img" alt="..." />
              <div className="card-img-overlay d-flex align-items-end flex-wrap">
                <h5 className="card-title py-3">Tani Info</h5>
                <p className="card-text article--text">Wadah edukasi dan informasi yang bertujuan untuk menjadi panduan bagi para petani yang ingin memulai usaha bertani dan membantu mewujudkan kemudahan bagi para petani</p>
                <p className="card-text py-1">
                  <Link to={"/info"} className="btn--login" style={{ textDecoration: "none" }}>
                    Selengkapnya
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 my-3 d-flex justify-content-center">
            <div className="card text-light" style={{ width: "18rem" }}>
              <img src={Card} className="card-img" alt="..." />
              <div className="card-img-overlay d-flex align-items-end flex-wrap">
                <h5 className="card-title py-5">Tani Shop</h5>
                <p className="card-text">Mempermudah para petani untuk mencari pabrik dan kios yang dibutuhkan</p>
                <p className="card-text py-2">
                  <Link to={"/shop"} className="btn--login" style={{ textDecoration: "none" }}>
                    Selengkapnya
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center my-3">
            <div className="card text-light" style={{ width: "18rem" }}>
              <img src={Card} className="card-img" alt="..." />
              <div className="card-img-overlay d-flex align-items-end flex-wrap">
                <h5 className="card-title py-5">Aksebilitas</h5>
                <p className="card-text">Mempermudah para petani untuk mengakses fitur-fitur dan mendapatkan informasi</p>
                <p className="card-text py-2">
                  <Link to={"/daftartoko"} className="btn--login" style={{ textDecoration: "none" }}>
                    Unduh Aplikasi
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
