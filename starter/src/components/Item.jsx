/* eslint-disable react/prop-types */
const Item = ({ props, onDeleteItem }) => {
  return (
    <li className="item">
      <span style={props.packed ? { textDecoration: "line-through" } : {}}>
        {props.quantity} {props.desc}
      </span>
      <button onClick={() => onDeleteItem(props.id)}>❌</button>
    </li>
  );
};

export default Item;
