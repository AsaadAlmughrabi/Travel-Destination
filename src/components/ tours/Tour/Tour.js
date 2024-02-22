import { Link } from "react-router-dom";
import "./Tour.css";
function Tour(props) {
  return (
    <div className="card">
    <Link to={`/city/${props.tour.id}`}>
        <img
          src={props.tour.image}
          alt={props.tour.name}
          id="img"
          className="card__image"/>
        <div className="card__content ">
          <h2 className="card__title">{props.tour.name}</h2>
        </div>
    </Link>
    </div>
  );
}
export default Tour;
