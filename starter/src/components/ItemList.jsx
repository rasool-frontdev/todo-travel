import { useState } from "react";
import Item from "./Item";

const ItemList = ({ items, onDeleteItem, onToggleItems, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "desc")
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            props={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onClearList}>Clear list </button>
      </div>
    </div>
  );
};

export default ItemList;
