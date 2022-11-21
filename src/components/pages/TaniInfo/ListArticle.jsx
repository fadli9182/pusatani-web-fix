import React from "react";
import { Link } from "react-router-dom";

const ListArticle = ({ articles, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="p-2 mb-5 col-6">
            <div className="card shadow h-100">
              <img height={"300px"} src={article.image} alt="berita" />
              <div className="p-4 " style={{ background: "linear-gradient(to top, rgba(0,0,0, 1), rgba(255,255,255, 0))", width: "100%" }}>
                <h5 className="text--shadow" style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                  {article.title}
                </h5>
                <hr />
                <p className="text--shadow">Author: {article.author}</p>
                <p className="article--text" style={{ color: "white", fontSize: "16px" }}>
                  {article.body}
                </p>
                <Link to={`/post/${article.id}`}>
                  <button className="btn--login">Lihat Selengkapnya</button>
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
