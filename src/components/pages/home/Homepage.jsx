import React from "react";
import "./home.css";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import homeBg from "../../asset/image/homeBg.webp";
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
      <div className="bg" style={{ background: `url(${homeBg})`, backgroundSize: "cover", backgroundAttachment: "fixed", height: "100vh", width: "100vw" }}>
        <Header />
        <HeroHome />
      </div>

      <div className="container content--home">
        <section>
          <Promo />
        </section>

        <section>
          <Tujuan />
        </section>
      </div>

      <section className="home--content">
        <HomeContent />
      </section>

      <div className="container">
        <section>
          <HomeTentang />
        </section>
      </div>

      <section>
        <HomeCarousel />
      </section>

      <div className="container">
        <section>
          <HomeUnduh />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
