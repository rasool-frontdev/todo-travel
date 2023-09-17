import Item from "./Item";

const ItemList = ({ items, onDeleteItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} props={item} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
