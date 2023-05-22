import './Customers.css';
import mainImg from './img/main.png';
import icon1 from '../customers/review/img/icon1.png'
import Review from './review/Review';

let reviews = [
    {name: 'Mh Jibon', rate: '4.8', img: icon1}
]

function Customers() {
  return (
    <section className='customers'>
        <img className='customers__img' src={mainImg} alt="" />
        <div className="customers__text">
            <h1>Our customers are very <br /> importan to us</h1>
            <p>All of our furniture uses the best materials and choices for <br /> our customers.All of our furniture uses the best materials <br /> and choices for our customers.</p>
            {reviews.map(item => <Review key={item.name} name={item.name} rate={item.rate} img={item.img} />)}
        </div>
    </section>
  );
}

export default Customers;
