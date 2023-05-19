import './About.css';
import mainImg from './img/about__main.png';
import busImg from './img/bus.png';
import shieldImg from './img/shield.png';
import checkImg from './img/check.png';



function About() {
  return (
    <section className='about'>
        <img src={mainImg} alt="" />
        <div className="about__main">
            <h1>About Us</h1>
            <p>All of our furniture uses the best materials and <br /> choices for our customers.All of our furniture <br /> uses the best materials </p>
            <div className="about__main-pros">
                <div className="item">
                    <img src={shieldImg} alt="" />
                    <div>
                        <h1>Best Quality</h1>
                        <p>All of our furniture uses the best <br /> materials and choices</p>
                    </div>
                </div>
                <div className="item">
                    <img src={checkImg} alt="" />
                    <div>
                        <h1>100% Secure</h1>
                        <p>All of our furniture uses the best <br /> materials and choices</p>
                    </div>
                </div>
                <div className="item">
                    <img src={busImg} alt="" />
                    <div>
                        <h1>Free Shpping</h1>
                        <p>All of our furniture uses the best <br /> materials and choices</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
