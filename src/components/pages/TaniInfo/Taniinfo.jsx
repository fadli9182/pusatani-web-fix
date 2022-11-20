import React, { useEffect, useState } from "react";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import { BASE_URL } from "../../utils/api";
import axios from "axios";
import InfoPetani from "./InfoPetani";
import Promo from "../home/Promo";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ListArticle from "./ListArticle";
import Pagination from "./Pagination";
import("./taniinfo.css");

const Taniinfo = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(2);

  useEffect(() => {
    async function getArticles() {
      setLoading(true);
      try {
        let res = await axios.get(`${BASE_URL}/article`);
        setArticles(res.data.data.data);
        console.log(res.data.data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    getArticles();
  }, []);

  const indexOflastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOflastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOflastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                Filter Berdasar Kategori
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
            <ListArticle articles={currentArticles} loading={loading} />
            <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} paginate={paginate} />
          </div>

          {/* <section className="text-center">
            <div className="btn-group">
              <button>
                <AiOutlineLeft />
              </button>
              <button>
                <AiOutlineRight />
              </button>
            </div>
          </section> */}
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
