import React from "react";
import "../asset/css/about.css";
import padi from "../asset/image/padi.jpg";
import CanvasJSReact from "../asset/canvasjs.react";
import about2 from "../asset/image/about2.jpg";
import about3 from "../asset/image/about3.jpg";
import TypewriterComponent from "typewriter-effect";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Tentang = () => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title: {
      text: "Pekerja Muda",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "<strong>{label}: {y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [
          { y: 20, label: "Pertanian" },
          { y: 35, label: "Manufaktur" },
          { y: 45, label: "Jasa" },
        ],
      },
    ],
  };
  return (
    <>
      <div className="about--bg">
        <Header />
        <div className="judul--tentang">
          <h1>Tentang Kami</h1>
          <p>Informasi Mengenai PusaTani</p>
        </div>
      </div>
      <div className="container my-5">
        <div className="card m-5 shadow card--about">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 p-5">
              <p className="text-center">
                {" "}
                Indonesia adalah negara agraris yang mayoritas penduduknya bermata pencaharian sebagai petani. khususnya di daerah Indramayu dimana banyaknya hasil pertanian dan harga yang tidak pasti dengan besarnya ketergantungan terhadap
                alam membuat petani Indonesia mengalami kesulitan dalam permodalan.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={padi} alt="gambar padi" style={{ borderRadius: "5px", margin: "0" }} />
            </div>
          </div>
        </div>

        <hr />

        <div className="card m-5 shadow">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <img className="img-fluid" src={about2} alt="gambar padi" style={{ borderRadius: "5px", margin: "0" }} />
            </div>
            <div className="col-md-6 p-5 ">
              <p className="text-center ">
                {" "}
                Hal inilah yang memicu rendahnya angka regenerasi petani muda. Data dari Badan Pusat Statistik menunjukkan bahwa hanya 19,18% pemuda Indonesia yang bekerja di sektor pertanian pada 2021 dan jumlahnya terus menurun bahkan di
                tengah peningkatan jumlah tenaga kerja di Indonesia.{" "}
              </p>
            </div>
          </div>
        </div>

        <hr />
        <CanvasJSChart options={options} />

        <hr />

        <div className="card m-5 shadow">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 p-5 ">
              <p className="text-center">
                {" "}
                Indonesia adalah negara agraris yang mayoritas penduduknya bermata pencaharian sebagai petani. khususnya di daerah Indramayu dimana banyaknya hasil pertanian dan harga yang tidak pasti dengan besarnya ketergantungan terhadap
                alam membuat petani Indonesia mengalami kesulitan dalam permodalan.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={about3} alt="gambar padi" style={{ borderRadius: "5px", margin: "0" }} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12" style={{ padding: "100px 200px" }}>
              <h2 style={{ fontWeight: "700" }}>
                Kamu Pemilik
                <span style={{ color: "#2c774b" }}>
                  <TypewriterComponent
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: ["Toko Pupuk?", "Pabrik?"],
                    }}
                  />{" "}
                </span>
              </h2>
              <h2>Ayo Bergabung Bersama Kami!</h2>
              <p>
                Bergabung sekarang untuk meningkatkan kesejahteraan petani dan memberantas oknum tengkulak yang tidak bertanggung jawab. Dan nikmati berbagai manfaat dari PusaTani, seperti informasi seputar pertanian hingga penyaluran gabah
                dan beras. Mari bersama mewujudkan ekosistem pertanian yang kuat!
              </p>
              <Link to={"/daftartoko"} className="btn--login" style={{ textDecoration: "none" }}>
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>

        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Tentang;
