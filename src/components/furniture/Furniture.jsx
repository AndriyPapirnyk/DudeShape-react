import './Furniture.css';
import mainImg from './img/main.png'

//

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
                <div className="item">
                    <img src="" alt="" />
                    <p>Living Room</p>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <p>Kitchen</p>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <p>Dining Room</p>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <p>Office</p>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <p>Bed Room</p>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <p>Hallway</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Furniture;
