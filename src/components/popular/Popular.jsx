import './Popular.css';
import Card from './card/Card';
import nextImg from './img/next-prev.png'

function Popuplar() {
  return (
    <section className='popular'>
      <h1>Our Popular Furniture</h1>
      <div className="row">
        <p>All of our furniture uses the best materials and choices for our customers.All of our <br /> furniture uses the best materials and choices for our customers.</p>
        <div className='row__options'>
          <img src={nextImg} alt="" />
          <img src={nextImg} alt="" />
        </div>
      </div>
      <div className="popular__list">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Popuplar;
