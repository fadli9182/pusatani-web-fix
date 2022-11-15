import React, { useEffect, useState } from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import Infobg from "../asset/image/bg-info.png";

const Info = () => {
  return (
    <>
      <div className="bg" style={{ background: `url(${Infobg})`, backgroundSize: "cover", backgroundAttachment: "fixed", height: "100%", width: "100%" }}>
        <Header />
        <div className="hero--home">
          <h1>
            Tani Info
            <br />
            Sekilas Informasi dan Tips Tentang Pertanian
          </h1>
        </div>
      </div>
    </>
  );
};

export default Info;
