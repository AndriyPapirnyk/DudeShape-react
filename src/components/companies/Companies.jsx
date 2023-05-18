import './Companies.css';
import img1 from './img/Frame 13.png';
import img2 from './img/Frame 14.png';
import img3 from './img/Frame 15.png';
import img4 from './img/Frame 63.png';
import img5 from './img/Frame 64.png';
import img6 from './img/Frame 65.png';

//



function Companies() {
  return (
    <section className="companies">
        <h1>Trusted by 20,000+ companies</h1>
        <div className="companies__list">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
        </div>
    </section>
  );
}

export default Companies;
