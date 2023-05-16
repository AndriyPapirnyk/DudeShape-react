import './Home.css';
import chairImg from './img/home__chair.jpg'

function Home() {
  return (
    <div className="home">
        <img src={chairImg} alt="" />
        <div className="home__main">
            <div>
            <h1>We Help You Make <br/> Modern Furniture</h1>
            <p>All of our furniture uses the best materials and <br /> choices for our customers.All of our furniture uses <br /> the best materials </p>
            <button>Explore More</button>
            </div>
        </div>
    </div>
  );
}

export default Home;
