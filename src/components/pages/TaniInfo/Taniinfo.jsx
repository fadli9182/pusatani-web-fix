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
import LoadingPage from "../../LoadingPage";
import { Link } from "react-router-dom";
import("./taniinfo.css");

const Taniinfo = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(`${BASE_URL}/article?=page1`);
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  async function getArticles() {
    try {
      let res = await axios.get(url);
      setArticles(res.data.data.data);
      setPrevUrl(res.data.data.prev_page_url);
      setNextUrl(res.data.data.next_page_url);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getArticles();
    window.scrollTo(0, 0);
  }, [url]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
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
                  <button>Cari berita berdasar Kategori</button>
                </Link>
              </div>
              <div className="row p-2 m-2 ">
                <ListArticle articles={articles} loading={loading} />

                <div className="btn-group btn--page">
                  {prevUrl && (
                    <motion.button
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.5 }}
                      className="btn--login"
                      onClick={() => {
                        setArticles([]);
                        setUrl(prevUrl);
                      }}
                    >
                      Sebelumnya
                    </motion.button>
                  )}

                  {nextUrl && (
                    <motion.button
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.5 }}
                      className="btn--login"
                      onClick={() => {
                        setArticles([]);
                        setUrl(nextUrl);
                      }}
                    >
                      Selanjutnya
                    </motion.button>
                  )}
                </div>
                {/* <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} paginate={paginate} /> */}
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
      )}
    </>
  );
};

export default Taniinfo;
