import React from "react";
import "../asset/css/about.css";
import Header from "../partials/Header";
import padi from "../asset/image/padi.jpg";
import Footer from "../partials/Footer";
import CanvasJSReact from "../asset/canvasjs.react";
import about2 from "../asset/image/about2.jpg";
import about3 from "../asset/image/about3.jpg";
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
      <div className="container my-5 badan">
        <hr />

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
              <p className="text-center">
                {" "}
                Hal inilah yang memicu rendahnya angka regenerasi petani muda. Data dari Badan Pusat Statistik menunjukkan bahwa hanya <b>19,18%</b> pemuda Indonesia yang bekerja di sektor pertanian pada 2021 dan jumlahnya terus menurun
                bahkan di tengah peningkatan jumlah tenaga kerja di Indonesia.{" "}
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
                Berangkat dari mimpi dan semangat yang besar, PusaTanI memiliki misi untuk menyejahterakan petani nusantara dengan membangun ekosistem pertanian yang kuat dan mempermudah jalannya proses hulu (Pengelolaan rantai pasok)
                hingga proses hilir (distribusi & penyaluran hasil panen) pada ekosistem pertanian. Dan menyediakan sistem informasi dan Tips Tentang Pertanian.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={about3} alt="gambar padi" style={{ borderRadius: "5px", margin: "0" }} />
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
