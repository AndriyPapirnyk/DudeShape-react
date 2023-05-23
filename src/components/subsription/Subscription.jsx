import './Subscription.css';
import Input from './input/Input';
import mailImg from '../subsription/input/img/mail.png';

//

let inputs = [
    {placeholder: 'Enter your email', buttonText: 'Register', img: mailImg}
]


function Subscription() {
  return (
    <section className='subscription'>
      <div className="subscription__main">
        <h1>Subscribe to get the latest news <br /> about us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> eiusmod tempor incididunt ut labore at dolore.</p>
        {inputs.map(item => <Input key={item.buttonText} placeholder={item.placeholder} img={item.img} buttonText={item.buttonText} />)}
      </div>
    </section>
  );
}

export default Subscription;
