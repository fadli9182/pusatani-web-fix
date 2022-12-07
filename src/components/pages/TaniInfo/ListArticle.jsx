import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LoadingFetch from "../LoadingFetch";

const ListArticle = ({ articles, loading }) => {
  if (loading) {
    return <LoadingFetch />;
  }
  return (
    <>
      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="p-2 mb-5 col-xl-6 col-md-12">
            <div className="card h-100">
              <img height={"300px"} src={article.image} alt="berita" />
              <div className="p-4 d-flex flex-column align-items-end" style={{ width: "100%" }}>
                <h5 className="text--shadow clamp" style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                  {article.title}
                </h5>
                <p className="text--shadow">Author: {article.author}</p>
                <p className="article--text" style={{ color: "rgba(0,0,0,0.8)", fontSize: "16px" }}>
                  {article.body}
                </p>
                <Link to={`/post/${article.id}`}>
                  <motion.button initial={{ scale: 1 }} whileHover={{ scale: 0.9 }} className="btn--login">
                    Lihat Selengkapnya
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListArticle;
