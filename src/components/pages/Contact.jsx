import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

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
            <p>Hubungi Kami</p>
            <Link>+6282828282</Link>
          </div>
          <div className="col-md-4">
            <AiOutlineMail className="contact--icon" />
            <p>Pesan Kami</p>
            <Link>pusatani@gmail.com</Link>
          </div>
          <div className="col-md-4">
            <CiLocationOn className="contact--icon" />
            <p>Lokasi Kami</p>
            <Link>+6282828282</Link>
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
                <textarea class="form-control" name="pesan" id="pesan-contact" rows="6" style={{ height: "10rem" }} />
              </div>
              <button className="btn--login w-100">Kirim</button>
            </form>
          </div>
        </div>
      </div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe title="map" width="1440px" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=indramayu&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
