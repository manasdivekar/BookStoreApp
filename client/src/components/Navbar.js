import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark"
      style={{ borderBottom: "1px solid antiquewhite" }}
    >
      <div className="container">
        <Link
          className="navbar-brand "
          style={{ color: "antiquewhite", fontWeight: "600", fontSize: "28px" }}
          to="/"
        >
          BookStore
        </Link>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
            <Link
              className="nav-item nav-link active text-white"
              to="/"
              style={{ margin: "5px", fontWeight: "500" }}
            >
              HOME
            </Link>
            <Link
              className="nav-item nav-link text-white"
              to="/books"
              style={{ margin: "5px", fontWeight: "500" }}
            >
              BOOKS
            </Link>
            <Link
              className="nav-item nav-link text-white"
              to="/addBooks"
              style={{ margin: "5px", fontWeight: "500" }}
            >
              ADD BOOKS
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
