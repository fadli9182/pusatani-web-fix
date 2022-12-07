/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import { motion } from "framer-motion";
import { BASE_URL } from "../../utils/api";
import axios from "axios";
import LoadingFetch from "../LoadingFetch";
import("./taniinfo.css");

const ArticleById = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(`${BASE_URL}/category/11`);

  async function getArticles() {
    setLoading(true);
    try {
      // setLoading
      let res = await axios.get(url);
      setLoading(false);
      setArticles(res.data.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getArticles();
  }, [url]);

  return (
    <>
      <Header />
      <div className="container">
        <div class="btn-group mb-3 d-flex justify-items-center" role="group" aria-label="Basic example">
          <button onClick={() => setUrl(`${BASE_URL}/category/12`)} type="button" class="p-4 btn btn--login color__white">
            Berita Baru
          </button>
          <button onClick={() => setUrl(`${BASE_URL}/category/13`)} type="button" class="btn btn--login color__white">
            Teknologi
          </button>
          <button onClick={() => setUrl(`${BASE_URL}/category/14`)} type="button" class="btn btn--login color__white">
            Bertani
          </button>
          <button onClick={() => setUrl(`${BASE_URL}/category/15`)} type="button" class="btn btn--login color__white">
            Hama & Penyakit
          </button>
        </div>
        <div className="row">
          {articles.length === 0 ? (
            <h1 className="text-center mt-5" style={{ heigth: "900px" }}>
              Tidak Ada Berita
            </h1>
          ) : loading ? (
            <LoadingFetch />
          ) : (
            <>
              {articles.map((article) => (
                <div key={article.id} className="p-2 mb-5 col-xl-6 col-md-12">
                  <div className="card shadow h-100">
                    <img height={"300px"} src={article.image} alt="berita" />
                    <div className="p-4 d-flex flex-column align-items-end h-100" style={{ width: "100%" }}>
                      <h5 className="text--shadow" style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                        {article.title}
                      </h5>
                      <p className="text--shadow">Author: {article.author}</p>
                      <p className="article--text" style={{ fontSize: "16px" }}>
                        {article.body}
                      </p>
                      <Link to={`/post/${article.id}`}>
                        <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} className="btn--login">
                          Lihat Selengkapnya
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleById;
