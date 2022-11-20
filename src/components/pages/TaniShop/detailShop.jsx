import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import { BASE_URL } from "../../utils/api";

const DetailShop = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState(null);
  const [pemilik, setPemilik] = useState("");
  const [produkToko, setProdukToko] = useState([]);

  const getSingleShop = async (e) => {
    try {
      const res = await axios.get(`${BASE_URL}/tokoWith/${id}`);
      setProdukToko(res.data.data.toko_to_produk);
      setName(res.data.data.name);
      setAddress(res.data.data.address);
      setDeskripsi(res.data.data.deskripsi);
      setImage(res.data.data.image);
      setPemilik(res.data.data.user_name);
      console.log(res.data.data);
      console.log(produkToko);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleShop();
  }, []);

  return (
    <>
      <Header />
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img className="singlePostImg py-3" src={image} alt="sa" />
          <h1 className="singlePostTitle">{name}</h1>
          <div className="singlePostInfo">
            <span>Alamat: {address}</span>
            <span>Pemilik: {pemilik}</span>
          </div>
          <p className="singlePostDesc">{deskripsi}</p>
          <hr />
          {produkToko.map((produk) => {
            return (
              <div key={produk.id} className="card mb-3">
                <div className="card-header">{produk.name}</div>
                <div className="card-body">
                  <img src={`http://pusatani.masuk.web.id/images/produk/${produk.image}`} alt="Foto Produk" width={"200px"} height={"200px"} />
                  <h5 className="card-title">{produk.detail}</h5>
                  <p className="card-text">{produk.price}</p>
                  <p>Stok: {produk.stok} </p>
                </div>
                <div className="card-footer">
                  <a className="btn--login" href="https://wa.me/${phone}">
                    Hubungi Kami
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailShop;
