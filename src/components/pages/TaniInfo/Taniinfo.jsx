/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import { BASE_URL } from "../../utils/api";
import axios from "axios";
import InfoPetani from "./InfoPetani";
import Promo from "../home/Promo";
import ListArticle from "./ListArticle";
// import Pagination from "./Pagination";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import("./taniinfo.css");

const Taniinfo = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url] = useState(`${BASE_URL}/article`);
  // const [prevUrl, setPrevUrl] = useState("");
  // const [nextUrl, setNextUrl] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);
  // const [totalPage, setTotalPage] = useState(0);

  async function getArticles() {
    setLoading(true);
    try {
      let res = await axios.get(url);
      setArticles(res.data.data);
      // setPrevUrl(res.data.data.prev_page_url);
      // setNextUrl(res.data.data.next_page_url);
      setLoading(false);
      console.log(res.data.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getArticles();
    window.scrollTo(0, 0);
  }, [url]);

  const indexOfLastPost = currentPage * articlesPerPage;
  const indexOfFirstPost = indexOfLastPost - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="info--bg">
        <Header />
        <div className="text-center judul--info">
          <h1 className="fw-bold">
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Tani Info"],
              }}
            />
          </h1>
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
            <Link to={"/category"}>
              <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="btn--login">
                Cari berita berdasar Kategori
              </motion.button>
            </Link>
          </div>
          <div className="row p-2 m-2 ">
            <ListArticle articles={currentArticles} loading={loading} />
            <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} paginate={paginate} />
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
