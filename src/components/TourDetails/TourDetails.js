import React, { useState } from "react";
import Footer from "../footer/Footer.js";
import { useParams } from "react-router-dom";
import Header from "../header/Header.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './TourDetails.css'

const toursData = require("../../data/db.json");

function TourDetails() {
  const { id } = useParams();

  const [showMore, setShowMore] = useState(true);

  const handleSeeMore = () => {
    setShowMore(!showMore);
  };

  const MaxChar = 100;

  const tour = toursData.find((tour) => tour.id === id);

  const description = showMore ? tour.info.substring(0, MaxChar) : tour.info;

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content">
          <Card className="card">
            <Card.Img variant="top" src={tour.image} className="card__image" />
            <Card.Body className="card__content">
              <Card.Title className="card__title">Id:{tour.id}</Card.Title>
              <Card.Title className="card__title">Name:{tour.name}</Card.Title>
              <Card.Title className="card__title">
                Price: {tour.price}
              </Card.Title>
            </Card.Body>
          </Card>
          <Card.Text className="card__text">{description}</Card.Text>
          {showMore ? (
            <Button variant="primary" onClick={handleSeeMore}>
              See More
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSeeMore}>
              See Less
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TourDetails;
