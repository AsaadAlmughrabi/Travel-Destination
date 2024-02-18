import "./Tours.css";

const Tours = (props) => {
  return (
    <>
      <div class="card">
      <img src={props.tourImage} alt={props.tourName} class="card__image" />
      <div class="card__content">
        <h2 class="card__title">{props.tourName}</h2>
      </div>
    </div>
    </>
  );
};

export default Tours;
