import './Main.css';
import Header from './header/Header';
import Home from './home/Home';
import Companies from './companies/Companies';
import About from './about/About';
import Popuplar from './popular/Popular';

function Main() {
  return (
    <div className="main">
        <div className="main__container">
            <Header />
            <Home />
            <Companies />
            <About />
            <Popuplar />
        </div>
    </div>
  );
}

export default Main;
