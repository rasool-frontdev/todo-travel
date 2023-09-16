import { useState } from "react";
import Form from "./components/Form";
import Head from "./components/Head";
import ItemList from "./components/ItemList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <div className="app">
      <Head />
      <Form onAddItem={handleAddItem} />
      <ItemList items={items} />
      <Stats />
    </div>
  );
};

export default App;