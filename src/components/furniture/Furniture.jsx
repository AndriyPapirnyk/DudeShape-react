import './Furniture.css';
import Item from './item/Item';
import mainImg from './img/main.png';

import item1Img from '../furniture/item/img/g1.png';
import item2Img from '../furniture/item/img/g2.png';
import item3Img from '../furniture/item/img/g3.png';
import item4Img from '../furniture/item/img/g4.png';
import item5Img from '../furniture/item/img/g5.png';
import item6Img from '../furniture/item/img/g6.png';

//

let itemsList = [
    {name: 'Living Room', img: item1Img},
    {name: 'Kitchen', img: item2Img},
    {name: 'Dining Room', img: item3Img},
    {name: 'Office', img: item4Img},
    {name: 'Bed Room', img: item5Img},
    {name: 'Hallway', img: item6Img},
]

function Furniture() {
  return (
    <section className="furniture">
        <div className="furniture__heading">
            <h1>All Furniture</h1>
            <div>
                <p>Shop By Room</p>
                <p>Shop By Category</p>
                <p>Shop By Style</p>
            </div>
        </div>
        <div className="furniture__main">
            <img src={mainImg} alt="" />
            <div className="furniture__main-options">
               {itemsList.map(item => <Item key={item.name} name={item.name} img={item.img} />)}
            </div>
        </div>
    </section>
  );
}

export default Furniture;
