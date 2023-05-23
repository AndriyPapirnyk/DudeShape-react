import './Input.css';


function Input(props) {
  return (
    <div className='input'>
        <img src={props.img} alt="" />
        <input type="email" placeholder={props.placeholder} />
        <button>{props.buttonText}</button>
    </div>
  );
}

export default Input;
