import './Main.css';
import Header from './header/Header';
import Home from './home/Home';

function Main() {
  return (
    <div className="main">
        <div className="main__container">
            <Header />
            <Home />
        </div>
    </div>
  );
}

export default Main;
