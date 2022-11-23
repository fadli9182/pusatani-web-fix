import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../asset/image/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { deleteToken, getUser } from "../../utils/api";
import { motion } from "framer-motion";

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (getUser()) {
      setIsLogin(true);
    }
  }, []);

  const navStyle = {
    borderBottom: "3px solid #2c774b",
    fontWeight: "700",
    color: "tomato",
  };
  const navNormal = {
    fontWeight: "normal",
    borderBottom: "3px solid transparent",
  };

  function userLogout() {
    deleteToken();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent text-center">
        <div className="container-fluid nav--item p-0 me-4">
          <img initial={{ rotate: 0 }} whileInView={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="ms-3 navbar--logo" src={Logo} width={"80px"} alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end nav--item" id="navbarNavAltMarkup">
            <div className="navbar-nav">
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
              {isLogin ? (
                <div className="">
                  <Link to={"/login"} onClick={userLogout}>
                    <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} className="btn btn-danger" style={{ fontSize: "12px" }}>
                      Logout
                    </motion.button>
                  </Link>
                </div>
              ) : (
                <div className="">
                  <Link to={"/login"}>
                    <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} className="btn btn-success" style={{ fontSize: "12px" }}>
                      Login
                    </motion.button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
