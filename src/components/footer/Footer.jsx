import './Footer.css';
import facebookImg from './img/facebook.png';
import instagramImg from './img/instagram.png';
import twitterImg from './img/twitter.png';
import youtubeImg from './img/youtube.png';
import arrowImg from './img/arrow.png'


function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__container">
        <div className="footer__main">
          <div className='footer__main-item'>
            <h1>DudeShape</h1>
            <p>Lorem ipsum dolor sit amet, conse <br /> ctetur adipiscing elit, sed eiusmod <br /> tempor incididunt ut labore .</p>
            <h2>Follow Us :</h2>
            <div className='footer__main-item__social'>
              <img src={facebookImg} alt="" />
              <img src={instagramImg} alt="" />
              <img src={twitterImg} alt="" />
              <img src={youtubeImg} alt="" />
            </div>
          </div>

          <div className='footer__main-item'>
            <h2>Take a tour</h2>
            <p>Features</p>
            <p>Pricing</p>
            <p>Product</p>
            <p>Support</p>
          </div>

          <div className='footer__main-item'>
            <h2>Our company</h2>
            <p>About Us</p>
            <p>Blog</p>
            <p>Media</p>
            <p>Contact Us</p>
          </div>

          <div className='footer__main-item'>
            <h2>Subscribe</h2>
            <p>Subscribe to get the latest <br /> news from us</p>
            <div className='footer__main-item__input'>
              <input type="email" placeholder='Email Address'/>
              <img src={arrowImg} alt="" />
            </div>
          </div>

        </div>
        <div className="footer__copyright">
          <p>Copyright @ 2021. Crafted with love.</p>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
