import "./Tours.css";
import Tour from "./Tour/Tour.js";

const toursData = require("../../data/db.json");
const Tours = () => {
  return (
    <>
      {toursData.map((tour) => {
        return <Tour key={tour.id} tour={tour} />;
      })}
    </>
  );
};

export default Tours;
