import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const image = require("../images/HomePage.jpg");
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center  align-items-center">
      <div className="row container">
        {/* Books Store Div */}
        <div
          className="col-lg-6 d-flex justify-content-center  align-items-start flex-column "
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "85px" }}>BOOK STORE</h2>

          <h2 style={{ fontSize: "72px" }}>FOR YOU</h2>

          <p style={{ color: "silver" }}>Checkout The Books From Here.</p>

          <Link className="viewBook my-4" to="/books">
            View Books
          </Link>
        </div>

        {/* Image */}
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img className="img-fluid homeImg" src={image} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Home;
