import './Main.css';
import Header from './header/Header';
import Home from './home/Home';
import Companies from './companies/Companies';

function Main() {
  return (
    <div className="main">
        <div className="main__container">
            <Header />
            <Home />
            <Companies />
        </div>
    </div>
  );
}

export default Main;
