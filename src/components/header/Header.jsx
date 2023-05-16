import './Header.css';
import loupeImg from './img/header__loupe.png'
import menuImg from './img/header__menu.png'

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">DudeShape</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
      <div className="header__options">
        <img src={loupeImg} alt="" />
        <img src={menuImg} alt="" />
      </div>
    </header>
  );
}

export default Header;
