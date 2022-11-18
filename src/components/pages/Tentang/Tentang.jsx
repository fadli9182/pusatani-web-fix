import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import Header from "../../partials/header/Header";
import Footer from "../../partials/footer/Footer";
import Promo from "../home/Promo";
import Logo from "../../asset/image/Logo.png";
import JumbotronTentang from "./JumbotronTentang";
import PromoTentang from "./PromoTentang";

const Tentang = () => {
  return (
    <>
      <div className="about--bg">
        <Header />
        <div className="judul--tentang">
          <h1>Tentang Kami</h1>
          <p>Informasi Mengenai PusaTani</p>
        </div>
      </div>
      <div className="container my-5 card--about">
        <section className="story--about text-center">
          <motion.img
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{
              scale: 0.8,
              rotate: 360,
            }}
            src={Logo}
            alt=""
            className="my-4"
          />

          <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", stiffness: 100, duration: 2 }} className="text-start">
            Indonesia adalah negara agraris yang mayoritas penduduknya bermata pencaharian sebagai <strong>petani</strong>. khususnya di daerah <strong>Indramayu</strong> dimana banyaknya hasil pertanian dan harga yang tidak pasti dengan
            besarnya ketergantungan terhadap alam membuat petani Indonesia mengalami kesulitan dalam permodalan. Hal inilah yang memicu rendahnya angka regenerasi <strong>petani muda</strong>. Data dari Badan Pusat Statistik menunjukkan
            bahwa hanya <strong>19,18%</strong> pemuda Indonesia yang bekerja di sektor pertanian pada 2021 dan jumlahnya terus <strong>menurun</strong> bahkan di tengah peningkatan jumlah tenaga kerja di Indonesia. <br />
            <strong>PusaTani</strong> sadar akan urgensi dari masalah pertanian yang ada di Indonesia. Berangkat dari mimpi dan semangat yang besar, <strong>PusaTanI</strong> memiliki misi untuk menyejahterakan petani nusantara dengan
            membangun ekosistem pertanian yang <strong>kuat</strong> dan mempermudah jalannya proses hulu (Pengelolaan rantai pasok) hingga proses hilir (distribusi & penyaluran hasil panen) pada ekosistem pertanian. Dan menyediakan sistem
            informasi dan Tips Tentang Pertanian
          </motion.p>
        </section>
        <JumbotronTentang />
        <PromoTentang />

        <div className="container">
          <Promo />
        </div>

        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Tentang;
