/* eslint-disable react/prop-types */
const Item = ({ props }) => {
  console.log(props.packed);
  return (
    <li className="item">
      <span style={props.packed ? { textDecoration: "line-through" } : {}}>
        {props.quantity} {props.desc}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
