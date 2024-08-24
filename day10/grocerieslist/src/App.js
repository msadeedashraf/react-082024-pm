import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { useState } from "react";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Bread",
    },
    {
      id: 2,
      checked: false,
      item: "Milk",
    },
    {
      id: 3,
      checked: true,
      item: "Eggs",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    //console.log(id);
    setItems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    //console.log(id);
    const listItems = items.filter((i) => i.id !== id);

    setItems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem />
      <Main
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
