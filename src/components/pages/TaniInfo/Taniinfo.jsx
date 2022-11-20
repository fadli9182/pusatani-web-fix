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
      setArticles(res.data.data.data);
      console.log(res.data.data.data);
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
          <h1 className="fw-bold">Tani Info</h1>
          <p>Sekilas Informasi Teknologi dan Pertanian</p>
        </div>
      </div>
      <div className="container info--body">
        <section>
          <div className="text-center pb-5">
            <h1 style={{ fontWeight: "700" }}>Berita</h1>
            <p>Berita informasi tentang Teknologi dan teknik Pertanian</p>
          </div>
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
            {articles?.map((article) => {
              return (
                <div key={article.id} className="col-lg-6 col-md-6 col-sm-12 p-2 mb-3">
                  <div className="card shadow h-100 ">
                    <img className="img-fluid" src={article.image} alt="berita" />
                    <div className="p-4" style={{ position: "absolute", bottom: "0", background: "linear-gradient(to top, rgba(0,0,0, .7), rgba(255,255,255, 0))", width: "100%" }}>
                      <h5 className="text--shadow" style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                        {article.title}
                      </h5>
                      <hr />
                      <p className="text--shadow">Author: {article.author}</p>
                      <p className="article--text text--shadow" style={{ fontSize: "12px" }}>
                        {article.body}
                      </p>
                      <Link to={`/post/${article.id}`}>
                        <button className="btn--login">Lihat Selengkapnya</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <section>
        <InfoPetani />
      </section>

      <div className="container">
        <section>
          <Promo />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Taniinfo;
