import React from "react";
import Logo from "../assets/images/Logo.jpg";
import { Link } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light menylinje">
      <div className="container-fluid">
        <Link className="nav-link active" to="/Home">
          <img className="logo" src={Logo} alt="Innlandet IT Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" />
            <Link className="nav-link active" to="/Home">
              Hjem
            </Link>
            <li className="nav-item" />
            <Link className="nav-link active" to="/om-oss">
              Om oss
            </Link>
            <li className="nav-item" />
            <Link className="nav-link active" to="/nyheter">
              Nyheter
            </Link>
            <li className="nav-item" />
            <Link className="nav-link active" to="/kamper">
              Kamper
            </Link>
            <li className="nav-item" />
            <Link className="nav-link active" to="/overganger-og-rykter">
              Overganger og rykter
            </Link>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Ute av drift"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Søk
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
