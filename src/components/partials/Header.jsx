import React from "react";
import Logo from "../asset/image/Logo.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Header() {
  return (
    <div>
      <nav class="navbar bg-transparent">
        <div class="container-fluid d-flex align-content-center px-5">
          <img className="img-fluid" src={Logo} alt="" width={"80px"} />
          <div class="d-flex align-content-center my-2 ms-auto">
            <ul className="m-0">
              <Link className="nav--link">Home</Link>
              <Link className="nav--link">Tentang Kami</Link>
              <Link className="nav--link">Tani Info</Link>
              <Link className="nav--link">Tani Shop</Link>
              <Button className="me-2" style={{ fontSize: "12px" }}>
                Login
              </Button>
              <Button className="btn-danger" style={{ fontSize: "12px" }}>
                Register
              </Button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
