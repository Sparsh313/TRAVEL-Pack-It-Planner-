import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import List from "./List";

function App() {
  const [todo, setTodo] = useState([]);
  //Add items
  function HandleAddItems(e) {
    setTodo((item) => [...item, e]);
  }
  //REMOVE AN ITEM
  const HandleDeleteItems = (id) => {
    setTodo((remove) => remove.filter((item) => item.id !== id));
  };

  const HandleToggleItem = (id) => {
    setTodo((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  function clearList() {
    const confirm = window.confirm("are you sure");
    if (confirm) setTodo([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={HandleAddItems} />
      <List
        items={todo}
        onDeleteItems={HandleDeleteItems}
        onToggle={HandleToggleItem}
        onclear={clearList}
      />
      <Stats items={todo} />
    </div>
  );
}

export default App;
