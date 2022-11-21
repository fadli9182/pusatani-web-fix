import React, { useEffect, useState } from "react";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import "./post.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/api";

const DetailPost = () => {
  const [judul, setJudul] = useState("");
  const [body, setBody] = useState("");
  // const [category, setCategory] = useState();
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState();
  const [date, setDate] = useState();
  const { id } = useParams();

  const getSinglePost = async (e) => {
    const res = await axios.get(`${BASE_URL}/article/${id}`);
    setJudul(res.data.data.title);
    setBody(res.data.data.body);
    setImage(res.data.data.image);
    setAuthor(res.data.data.author);
    setDate(res.data.data.createdAt);
    console.log(res.data.data);
    console.log(typeof image);
  };
  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <section>
          <div className="singlePost">
            <div className="singlePostWrapper">
              <h1 className="singlePostTitle fw-bold text--green">{judul}</h1>

              <img className="singlePostImg py-3" src={`http://pusatani.masuk.web.id/images/Article/${image}`} alt="foto article" />
              <div className="singlePostInfo">
                <h5 className="fw-bold">Author: {author}</h5>
              </div>
              <p className="singlePostDesc" style={{ lineHeight: "30px", textAlign: "justify" }}>
                {body}
              </p>
              <hr />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DetailPost;
