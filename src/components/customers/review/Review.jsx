import './Review.css';
import starImg from './img/star.png'

function Review(props) {
  return (
    <div className="review">
        <img className='review__img' src={props.img} alt="" />
        <div className="review__info">
            <h2>{props.name}</h2>
            <div>
                <img src={starImg} alt="" />
                <p>{props.rate}</p>
            </div>
        </div>
    </div>
  );
}

export default Review;
