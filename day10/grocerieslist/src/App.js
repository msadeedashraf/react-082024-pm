import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { useState } from "react";
import AddItem from "./AddItem";

function App() {
  /*
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
*/

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shopinglist"))
  );

  const [newItem, setNewItem] = useState("");

  const handleSubmission = (e) => {
    //console.log("Insert");
    e.preventDefault();
    //console.log(newItem);
    if (!newItem) return; // if new item is coming from the input

    addItem(newItem); //if new item is added then call additem method
    setNewItem(""); //after add the item empty the input field
  };

  //addItem function recieves one newItem every time
  const addItem = (item) => {
    //it checks the existing value of the id and add one to the last id value
    //in case there is no item in the list then sets it to 1
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    //console.log(id);

    const myNewItem = { id, checked: false, item }; //set the object with the three items id, checked and item value
    const listItems = [...items, myNewItem]; // copies the exiting items and merge the new item in the array
    //console.log(listItems);
    saveItems(listItems);
  };

  //to create a function every time
  //const function_name = () => {};

  const saveItems = (listItems) => {
    setItems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    //console.log(id);
    //setItems(listItems);
    //localStorage.setItem("shopinglist", JSON.stringify(listItems));
    saveItems(listItems);
  };

  const handleDelete = (id) => {
    //console.log(id);
    const listItems = items.filter((i) => i.id !== id);

    //setItems(listItems);
    //localStorage.setItem("shopinglist", JSON.stringify(listItems));
    saveItems(listItems);
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmission={handleSubmission}
      />
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
