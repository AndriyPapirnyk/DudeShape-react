import './Popular.css';
import Card from './card/Card';

function Popuplar() {
  return (
    <section className='popular'>
      <h1>Our Popular Furniture</h1>
      <div className="row">
        <p></p>
        <div className='row__options'>
          <img src="" alt="" />
          <img src="" alt="" />
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
