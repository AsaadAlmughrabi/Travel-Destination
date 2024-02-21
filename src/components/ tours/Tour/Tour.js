import { Link } from 'react-router-dom';
import './Tour.css'
function Tour(props) {
    return (
        <Link to={`/city/${props.tour.id}`}>
            <div className='wrapper'>
            <div className='card'>
                <img src={props.tour.image} alt={props.tour.name} id='img' className='card__image' />
                <div className='card__content '>
                <h2 className='card__title'>{props.tour.name}</h2>
            </div>
            </div></div>
        </Link>
    )
}
export default Tour;