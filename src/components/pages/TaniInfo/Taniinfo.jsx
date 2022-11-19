import React, { useEffect, useState } from "react";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import { BASE_URL } from "../../utils/api";
import axios from "axios";
import InfoPetani from "./InfoPetani";
import Promo from "../home/Promo";
import { Link } from "react-router-dom";
import("./taniinfo.css");

const Taniinfo = () => {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    try {
      let res = await axios.get(`${BASE_URL}/article`);
      setArticles(res.data.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="info--bg">
        <Header />
        <div className="text-center judul--info">
          <h1>Tani Info</h1>
          <p>Sekilas Informasi Teknologi dan Pertanian</p>
        </div>
      </div>
      <div className="container info--body">
        <div className="text-center pb-5">
          <h1 style={{ fontWeight: "700" }}>Berita</h1>
          <p>Berita informasi tentang Teknologi dan teknik Pertanian</p>
        </div>
        {/* body */}
        <div className="sort">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sorting Berdasar Kategori
            </button>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="/">
                Teknologi
              </a>
              <a class="dropdown-item" href="/">
                Berita
              </a>
            </div>
          </div>
        </div>
        <div className="row p-2 m-2">
          {articles.map((article) => {
            return (
              <div key={article.id} className="col-lg-4 col-md-6 col-sm-12 p-2">
                <div className="card shadow">
                  <img className="img-fluid" src={article.image} alt="berita" />
                  <div className="p-4">
                    <h5 style={{ fontWeight: "bold" }}>{article.title}</h5>
                    <p className="article--text" style={{ fontSize: "12px" }}>
                      {article.body}
                    </p>
                    <Link to="/post/:id" className="btn btn--login text-light">
                      Lihat Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <InfoPetani />

      <div className="container">
        <Promo />
      </div>
      <Footer />
    </>
  );
};

export default Taniinfo;
