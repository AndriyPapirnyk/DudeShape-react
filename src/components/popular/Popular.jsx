import './Popular.css';
import Card from './card/Card';
import nextImg from './img/next-prev.png';

//

import furniture1 from '../popular/card/img/furniture1.png';
import furniture2 from '../popular/card/img/furniture2.png';
import furniture3 from '../popular/card/img/furniture3.png';



let popularList = [
  {name: 'White Swan Chair', price: '40$', img: furniture1},
  {name: 'Brown Long Table', price: '120$', img: furniture2},
  {name: 'Milky Soft Sofa', price: '230$', img: furniture3},
]

function Popuplar() {
  return (
    <section className='popular'>
      <h1>Our Popular Furniture</h1>
      <div className="popular__row">
        <p>All of our furniture uses the best materials and choices for our customers.All of our <br /> furniture uses the best materials and choices for our customers.</p>
        <div className='popular__row-options'>
          <img src={nextImg} alt="" />
          <img src={nextImg} alt="" />
        </div>
      </div>
      <div className="popular__list">
        {popularList.map(item => <Card key={item.name} name={item.name} price={item.price} img={item.img} />)}
      </div>
    </section>
  );
}

export default Popuplar;
