import "./Home.css";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Tours from "../ tours/ Tours.js";
import React from 'react';

const toursData = require("../../data/db.json");

function Home() {
  return (
    <>
    <Header />
     <div className="wrapper">
      {toursData.map((tour) => {
        return <Tours tourName={tour.name} tourImage={tour.image}/>;
      })}
      </div>
      <Footer />
      
    </>
  );
}

export default Home;
