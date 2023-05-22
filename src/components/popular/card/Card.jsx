import './Card.css';
import likeImg from './img/like.png'
import shareImg from './img/share.png'


function Card(props) {
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <div className="card__info">
            <div className="row">
                <h1>{props.name}</h1>
                <div>
                    <img src={likeImg} alt="" />
                    <img src={shareImg} alt="" />
                </div>
            </div>
            <div className="row">
                <p style={{margin: 0}}>{props.price}</p>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
  );
}

export default Card;
