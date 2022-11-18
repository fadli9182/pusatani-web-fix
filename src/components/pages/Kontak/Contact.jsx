import React from "react";
import "./contact.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";
import FormContact from "./FormContact";

function Contact() {
  return (
    <>
      <div className="contact--header">
        <Header />
        <h1>Kontak Informasi</h1>
      </div>
      <div className="container justify-content-center" style={{ marginTop: "60px" }}>
        <div className="row text-center justify-content-center">
          <div className="col-md-4 w-25">
            <AiOutlinePhone className="contact--icon" />
            <p className="m-0 fw-bold">Hubungi Kami</p>
            <Link style={{ textDecoration: "none", color: "GrayText" }}>+6282828282</Link>
          </div>
          <div className="col-md-4 w-25 ">
            <AiOutlineMail className="contact--icon" />
            <p className="m-0 fw-bold">Pesan Kami</p>
            <Link style={{ textDecoration: "none", color: "GrayText" }}>pusatani@gmail.com</Link>
          </div>
          <div className="col-md-4 w-25">
            <CiLocationOn className="contact--icon" />
            <p className="m-0 fw-bold">Lokasi Kami</p>
            <Link style={{ textDecoration: "none", color: "GrayText" }}>Jalan Sana-Sini No.32 Indramayu, Jawa Barat</Link>
          </div>
        </div>
        <FormContact />
      </div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe title="map" width="1640px" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=indramayu&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default Contact;
