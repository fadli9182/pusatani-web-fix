import React from "react";
import Logo from "../asset/image/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { deleteToken } from "../utils/api";

function Header() {
  const navStyle = {
    borderBottom: "3px solid #2c774b",
  };
  const navNormal = {};

  function userLogout() {
    deleteToken();
  }

  return (
    <>
      <nav className="navbar nav--bg">
        <div className="container-fluid d-flex px-5">
          <img className="img-fluid order-2 order-md-1" src={Logo} alt="" width={"80px"} style={{ padding: "5px", borderRadius: "20%" }} />

          <div className="my-2 ms-auto nav--item order-1 order-md-2" id="navbarnav">
            <ul className="m-0">
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
                Contact
              </NavLink>
              <Link to={"/login"} className="btn btn-success me-2" style={{ fontSize: "12px" }}>
                Login
              </Link>
              <Link to={"/login"} onClick={userLogout} className="btn btn-danger" style={{ fontSize: "12px" }}>
                Logout
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
