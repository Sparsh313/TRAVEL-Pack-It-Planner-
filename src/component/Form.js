import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setdescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //Submit function
  const handleSubmit = (e) => {
    e.preventDefault(); //reload rokne ke liye

    if (!description) return;
    const newItems = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItems);

    setQuantity(1);
    setdescription("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do u you need 😍</h3>

      <select
        value={quantity}
        onChange={(e) => {
          // console.log(e.target);
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1) //20 lenght ka array de de ga 1 - 20
          .map((e) => (
            <option value={e} key={e}>
              {e}
            </option>
          ))}
      </select>
      <input
        type="text"
        placeholder="item"
        value={description}
        onChange={(e) => {
          // console.log(e.target);
          setdescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}
