import './Item.css';

//

function Item(props) {
  return (
    <div className="item">
        <img src={props.img} alt="" />
        <p>{props.name}</p>
    </div>
  );
}

export default Item;
