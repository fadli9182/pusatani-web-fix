import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

function Contact() {
  return (
    <>
      <div className="contact--header">
        <Header />
        <h1>Contact</h1>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <AiOutlinePhone className="contact--icon" />
            <p className="m-0">Hubungi Kami</p>
            <Link style={{ textDecoration: "none", color: "GrayText" }}>+6282828282</Link>
          </div>
          <div className="col-md-4">
            <AiOutlineMail className="contact--icon" />
            <p className="m-0">Pesan Kami</p>
            <Link style={{ textDecoration: "none", color: "GrayText" }}>pusatani@gmail.com</Link>
          </div>
          <div className="col-md-4">
            <CiLocationOn className="contact--icon" />
            <p className="m-0">Lokasi Kami</p>
            <Link style={{ textDecoration: "none", color: "GrayText" }}>Jalan Sana-Sini No.32 Indramayu, Jawa Barat</Link>
          </div>

          <div className="col-md-12 form--contact my-5">
            <form action="" style={{ color: "#2c774b" }}>
              <div className="mb-3">
                <label htmlFor="email-contact" className="form-label d-flex">
                  Email
                </label>
                <input type="email" className="form-control" name="email" id="email-contact" placeholder="Masukan Email Anda" />
              </div>
              <div className="mb-3">
                <label htmlFor="pesan-contact" className="form-label d-flex">
                  Pesan
                </label>
                <textarea className="form-control" name="pesan" id="pesan-contact" rows="6" style={{ height: "10rem" }} />
              </div>
              <button className="btn--login w-100">Kirim</button>
            </form>
          </div>
        </div>
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
