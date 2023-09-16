import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} props={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
