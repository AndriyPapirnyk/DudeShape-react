import './Card.css';
import likeImg from './img/like.png'
import shareImg from './img/share.png'
import mainImg from './img/main.png'


function Card() {
  return (
    <div className="card">
        <img src={mainImg} alt="" />
        <div className="card__info">
            <div className="row">
                <h1>White Swan Chair </h1>
                <div>
                    <img src={likeImg} alt="" />
                    <img src={shareImg} alt="" />
                </div>
            </div>
            <div className="row">
                <p>$40</p>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
  );
}

export default Card;
