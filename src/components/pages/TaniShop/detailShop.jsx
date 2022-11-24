/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import { BASE_URL } from "../../utils/api";
import { motion } from "framer-motion";
import LoadingPage from "../../LoadingPage";

const DetailShop = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState(null);
  const [pemilik, setPemilik] = useState("");
  const [produkToko, setProdukToko] = useState([]);
  const [phoneToko, setPhoneToko] = useState("");
  const [loading, setLoading] = useState(false);

  const getSingleShop = async (e) => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/tokoWith/${id}`);
      setProdukToko(res.data.data.data.toko_to_produk);
      setPhoneToko(res.data.data.phone);
      setName(res.data.data.data.name);
      console.log(name);
      setAddress(res.data.data.data.address);
      setDeskripsi(res.data.data.data.deskripsi);
      setImage(res.data.data.data.image);
      setPemilik(res.data.data.data.user_name);
      setLoading(false);
      console.log(res.data.data);
      console.log(produkToko);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleShop();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Header />
      <div className="singlePost">
        <div className="singlePostWrapper">
          <div className="d-flex justify-content-center" style={{ padding: "10px 130px" }}>
            <img className="singlePostImg py-3" src={image} alt="Foto Toko" />
          </div>
          <h1 className="text-center fw-bold" style={{ textTransform: "capitalize" }}>
            {name}
          </h1>
          <div className="container">
            <h4>Pemilik: {pemilik}</h4>
            <h5> Alamat: {address}</h5>
            <p>{deskripsi}</p>
          </div>
          <hr />

          <div className="container">
            <h2 className="text-center fw-bold">Produk Kami!</h2>
            <div className="row">
              {produkToko.length === 0 ? (
                <div className="text-center">Tidak Ada Produk</div>
              ) : (
                produkToko.map((produk) => {
                  return (
                    <div key={produk.id} className="col-xl-4 col-md-6 col-sm-12 my-3">
                      <div key={produk.id} className="card h-100 mb-3 shadow">
                        <div className="text-center mt-3" style={{ textTransform: "capitalize" }}>
                          <h3 className="fw-bold">{produk.name}</h3>
                        </div>
                        <div className="card-body">
                          <div className="d-flex justify-content-center pb-3">
                            <img className="text-center" src={`http://pusatani.masuk.web.id/images/produk/${produk.image}`} alt="Foto Produk" style={{ height: "200px", width: "200px" }} />
                          </div>
                          <p className="card-text" style={{ textAlign: "justify" }}>
                            {produk.detail}
                          </p>
                          <p className="card-text fw-bold">Rp: {produk.price}</p>
                          <p className="fw-bold">Stok: {produk.stok} </p>
                        </div>
                        <div className="d-flex justify-content-center m-2">
                          <a href={`https://wa.me/${phoneToko}`}>
                            <motion.button className="btn--login" initial={{ scale: 1 }} whileHover={{ scale: 1.5 }}>
                              Hubungi Kami
                            </motion.button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailShop;
