import React from "react";
import "./footer.css";
import Logo from "../../asset/image/Logo.png";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer--bg mt-5">
        <div className="row pt-5">
          <div className="col-md-3 col-4 text-center">
            <img className="img-fluid" src={Logo} alt="Logo" />
          </div>
          <div className="col-md-2 col-4">
            <h5>Quick Links</h5>
            <ul className="d-flex flex-column">
              <Link to={"/"} className="footer--link">
                Home
              </Link>
              <Link to={"/about"} className="footer--link">
                Tentang Kami
              </Link>
              <Link to={"/info"} className="footer--link">
                Tani Info
              </Link>
              <Link to={"/shop"} className="footer--link">
                Tani Shop
              </Link>
            </ul>
          </div>
          <div className="col-md-2 col-4" style={{ width: "13%" }}>
            <div>
              <h5>Products</h5>
              <ul className="d-flex flex-column">
                <Link to={"/"} className="footer--link">
                  Pupuk
                </Link>
                <Link to={"/"} className="footer--link">
                  Pestisida
                </Link>
                <Link to={"/"} className="footer--link">
                  Padi
                </Link>
                <Link to={"/"} className="footer--link">
                  Berita
                </Link>
                <Link to={"/"} className="footer--link">
                  Teknologi
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div>
              <h5>Contact Us</h5>
              <ul>
                <li>
                  Email: <Link className="footer--link">pusatani@gmail.com</Link>
                </li>
                <li>
                  Phone: <Link className="footer--link">+62826262626</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="">
              <h5>Social Media</h5>
              <div className="sosmed">
                <Link className="footer--link">
                  <AiFillFacebook />
                </Link>
                <Link className="footer--link">
                  <AiFillInstagram />
                </Link>
                <Link className="footer--link">
                  <AiOutlineTwitter />
                </Link>
                <Link className="footer--link">
                  <AiFillYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p style={{ paddingBottom: "50px", textShadow: "none" }} className="text-center">
          &copy;2022 PusaTani | All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
