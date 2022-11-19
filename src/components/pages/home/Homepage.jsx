import React from "react";
import "./home.css";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import homeBg from "../../asset/image/homeBg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroHome from "./HeroHome";
import Promo from "./Promo";
import Tujuan from "./Tujuan";
import HomeContent from "./HomeContent";
import HomeTentang from "./HomeTentang";
import HomeCarousel from "./HomeCarousel";
import HomeUnduh from "./HomeUnduh";

function Homepage() {
  return (
    <>
      <div className="bg" style={{ background: `url(${homeBg})`, backgroundSize: "cover", backgroundAttachment: "fixed", height: "100%", width: "100%" }}>
        <Header />
        <HeroHome />
      </div>
      <Promo />
      <br />
      {/* {/card/} */}
      <div className="container content--home">
        <Tujuan />
        <HomeContent />
      </div>

      {/* main */}
      <div className="container py-5">
        <HomeTentang />
      </div>
      {/* testi */}
      <HomeCarousel />
      {/* foot */}
      <div className="container my-5">
        <HomeUnduh />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
