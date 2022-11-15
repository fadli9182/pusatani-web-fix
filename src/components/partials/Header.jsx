import React from "react";
import Logo from "../asset/image/Logo.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const navStyle = {
    borderBottom: "3px solid #2c774b",
  };
  const navNormal = {};
  return (
    <>
      <nav class="navbar  nav--bg">
        <div class="container-fluid d-flex align-content-center px-5">
          <img className="img-fluid" src={Logo} alt="" width={"80px"} style={{ background: "white", padding: "5px", borderRadius: "20%" }} />
          <div class="d-flex align-content-center my-2 ms-auto nav--item">
            <ul className="m-0">
              <NavLink style={({ isActive }) => (isActive ? navStyle : navNormal)} to={"/"} className="nav--link">
                Home
              </NavLink>
              <NavLink style={({ isActive }) => (isActive ? navStyle : navNormal)} to={"/about"} className="nav--link">
                Tentang Kami
              </NavLink>
              <NavLink style={({ isActive }) => (isActive ? navStyle : navNormal)} to={"/info"} className="nav--link">
                Tani Info
              </NavLink>
              <NavLink style={({ isActive }) => (isActive ? navStyle : navNormal)} to={"/tanishop"} className="nav--link">
                Tani Shop
              </NavLink>
              <NavLink style={({ isActive }) => (isActive ? navStyle : navNormal)} to={"/contact"} className="nav--link">
                Contact
              </NavLink>
              <Link to={"/login"} className="btn btn-success me-2" style={{ fontSize: "12px" }}>
                Login
              </Link>
              <Link to={"/register"} className="btn btn-danger" style={{ fontSize: "12px" }}>
                Register
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
