import './Input.css';


function Input(props) {
  return (
    <div className='input'>
        <div>
        <img src={props.img} alt="" />
        <input type="email" placeholder={props.placeholder} />
        </div>
        <button>{props.buttonText}</button>
    </div>
  );
}

export default Input;
