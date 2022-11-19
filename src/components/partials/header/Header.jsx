import React from "react";
import "./header.css";
import Logo from "../../asset/image/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { deleteToken } from "../../utils/api";
import { motion } from "framer-motion";

function Header() {
  const navStyle = {
    borderBottom: "3px solid #2c774b",
    fontWeight: "700",
  };
  const navNormal = {
    fontWeight: "normal",
  };

  function userLogout() {
    deleteToken();
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent text-center">
        <div class="container-fluid nav--item">
          <img initial={{ rotate: 0 }} whileInView={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="ms-5 navbar--logo" src={Logo} width={"80px"} alt="logo" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end nav--item" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink style={({ isActive }) => (isActive ? navStyle : navNormal)} to={"/"} className="nav--link">
                Home
              </NavLink>
              <NavLink style={({ isActive }) => (isActive ? navStyle : navNormal)} to={"/info"} className="nav--link">
                Tani Info
              </NavLink>
              <NavLink style={({ isActive }) => (isActive ? navStyle : navNormal)} to={"/shop"} className="nav--link">
                Tani Shop
              </NavLink>
              <NavLink style={({ isActive }) => (isActive ? navStyle : navNormal)} to={"/about"} className="nav--link">
                Tentang Kami
              </NavLink>
              <NavLink style={({ isActive }) => (isActive ? navStyle : navNormal)} to={"/contact"} className="nav--link">
                Kontak
              </NavLink>
              <NavLink style={({ isActive }) => (isActive ? navStyle : navNormal)} to={"/profil"} className="nav--link">
                Profil
              </NavLink>
              <div className="">
                <Link to={"/login"} className="btn btn-success me-2" style={{ fontSize: "12px" }}>
                  Login
                </Link>
                <Link to={"/login"} onClick={userLogout} className="btn btn-danger" style={{ fontSize: "12px" }}>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
