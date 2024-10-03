import { useState } from "react";

export default function List({ items, onDeleteItems, onToggle, onclear }) {
  const [sort, setsort] = useState("input");

  let sortedItems;
  if (sort === "input") sortedItems = items;

  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((e) => (
          <Item
            obj={e}
            key={e.id}
            onDeleteItem={onDeleteItems}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div>
        <select value={sort} onChange={(e) => setsort(e.target.value)}>
          <option value="input"> Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>

        <button onClick={onclear}>Clear list</button>
      </div>
    </div>
  );
}
const Item = ({ obj, onDeleteItem, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={obj.packed}
        onChange={() => onToggle(obj.id)}
      />
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.quantity} {obj.description}
      </span>
      <button onClick={() => onDeleteItem(obj.id)}>❌</button>
    </li>
  );
};
