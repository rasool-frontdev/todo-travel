/* eslint-disable react/prop-types */
const Item = ({ props, onDeleteItem, onToggleItems }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        value={props.packed}
        onChange={() => onToggleItems(props.id)}
      />
      <span style={props.packed ? { textDecoration: "line-through" } : {}}>
        {props.quantity} {props.desc}
      </span>
      <button onClick={() => onDeleteItem(props.id)}>❌</button>
    </li>
  );
};

export default Item;
