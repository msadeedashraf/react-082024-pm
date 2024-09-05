import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not recieve the expected data");
        const listItems = await response.json();
        console.log(listItems);

        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
        console.log(err.stack);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);

    //setTimeout(() => {}, 2000);
  }, []);

  //addItem function recieves one newItem every time
  const addItem = async (item) => {
    //it checks the existing value of the id and add one to the last id value
    //in case there is no item in the list then sets it to 1
    const id = items.length
      ? (parseInt(items[items.length - 1].id) + 1).toString()
      : "1";

    //console.log(id);

    /*const newId = (id) => {
      id.toString();
    };
*/

    const myNewItem = { id, checked: false, item }; //set the object with the three items id, checked and item value
    const listItems = [...items, myNewItem]; // copies the exiting items and merge the new item in the array
    //console.log(listItems);
    setItems(listItems);

    const postOptions = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };

    console.log(postOptions);
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    //console.log(id);
    //setItems(listItems);
    //localStorage.setItem("shopinglist", JSON.stringify(listItems));
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    console.log(myItem);

    const updateOptions = {
      method: "PATCH",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };

    const reqUrl = `${API_URL}/${id}`;
    //  console.log(reqUrl);
    // console.log(updateOptions);

    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    //console.log(id);
    const listItems = items.filter((i) => i.id !== id);

    //setItems(listItems);
    //localStorage.setItem("shopinglist", JSON.stringify(listItems));
    setItems(listItems);

    const deleteOptions = {
      method: "DELETE",
    };

    const reqUrl = `${API_URL}/${id}`;

    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  const handleSubmission = (e) => {
    //console.log("Insert");
    e.preventDefault();
    //console.log(newItem);
    if (!newItem) return; // if new item is coming from the input

    addItem(newItem); //if new item is added then call additem method
    setNewItem(""); //after add the item empty the input field
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmission={handleSubmission}
      />

      <main>
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}

        {isLoading && (
          <p style={{ color: "blue" }}>
            {"Items are getting loaded please wait"}
          </p>
        )}

        {!fetchError && !isLoading && (
          <Main
            items={items.filter((i) =>
              i.item.toLowerCase().includes(search.toLowerCase())
            )}
            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;
