import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import { motion } from "framer-motion";
import { BASE_URL } from "../../utils/api";
import axios from "axios";

const ArticleById = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(11);
  const [url, setUrl] = useState(`${BASE_URL}/category/11`);

  async function getArticles() {
    try {
      // setLoading
      let res = await axios.get(url);
      setArticles(res.data.data);
      console.log(res.data.data);
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
        <div class="btn-group" role="group" aria-label="Basic example">
          <button onClick={() => setUrl(`${BASE_URL}/category/11`)} type="button" class="btn btn-primary">
            Berita Baru
          </button>
          <button onClick={() => setUrl(`${BASE_URL}/category/12`)} type="button" class="btn btn-primary">
            Teknologi
          </button>
          <button onClick={() => setUrl(`${BASE_URL}/category/13`)} type="button" class="btn btn-primary">
            Berita
          </button>
        </div>
        <div className="row">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleById;
