import "./Home.css";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Tours from "../ tours/ Tours.js";
import React from "react";

function Home() {
  return (
    <>
      <Header />

      <div className="main">
        <Tours />
      </div>

      <Footer />
    </>
  );
}

export default Home;
