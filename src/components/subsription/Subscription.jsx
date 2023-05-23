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
        <h1>f</h1>
        <p>f</p>
        {inputs.map(item => <Input key={item.buttonText} placeholder={item.placeholder} img={item.img} buttonText={item.buttonText} />)}
      </div>
    </section>
  );
}

export default Subscription;
