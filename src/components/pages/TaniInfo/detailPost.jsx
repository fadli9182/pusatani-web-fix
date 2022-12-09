/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import "./post.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/api";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import LoadingFetch from "../LoadingFetch";

const DetailPost = () => {
  const [judul, setJudul] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState();
  const [date, setDate] = useState();
  const { id } = useParams();

  const getSinglePost = async (e) => {
    setLoading(true);
    try {
      let res = await axios.get(`${BASE_URL}/article/${id}`);
      setJudul(res.data.data.title);
      setBody(res.data.data.body);
      setImage(res.data.data.image);
      setAuthor(res.data.data.author);
      setDate(res.data.data.created_at);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const newDate = new Date(date).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  useEffect(() => {
    getSinglePost();
  }, []);

  function Breadcrumbs() {
    return (
      <Breadcrumb className="text-success">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/info">Tani Info</Breadcrumb.Item>
        <Breadcrumb.Item active>{judul}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
  Breadcrumbs();

  if (loading) {
    return (
      <>
        <Header />
        <div className="container">
          <div className="bread">
            <Breadcrumbs />
          </div>
          <LoadingFetch />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="bread">
          <Breadcrumbs />
        </div>
        {loading ? (
          <LoadingFetch />
        ) : (
          <>
            <section style={{ paddingTop: "10px" }}>
              <div className="singlePost">
                <div className="singlePostWrapper">
                  <h1 className="singlePostTitle fw-bold text--green">{judul}</h1>
                  <img className="singlePostImg py-3 img-fluid" src={`http://pusatani.masuk.web.id/images/Article/${image}`} alt="foto article" />
                  <div className="singlePostInfo">
                    <h5 className="fw-bold">Author: {author}</h5>
                    <h5 className="fw-bold">Dibuat: {newDate}</h5>
                  </div>
                  {/* <article id="biji"></article> */}
                  <article className="artikel">{body}</article>
                  {/* <div id="blah">asep /n dera</div> */}
                  <hr />
                  <section>
                    <div className="social">
                      <h3>Bagikan Artikel ini</h3>
                      <div className="socialLinks">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2F" target="_blank" rel="noreferrer">
                          <AiFillFacebook />
                        </a>
                        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.facebook.com%2F" target="_blank" rel="noreferrer">
                          <AiOutlineTwitter />
                        </a>
                        <a style={{ color: "green" }} href="https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.facebook.com%2F" target="_blank" rel="noreferrer">
                          <AiOutlineWhatsApp />
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DetailPost;
