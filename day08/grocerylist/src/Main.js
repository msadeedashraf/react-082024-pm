import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Main = () => {
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

  //map
  //Array.map( () => ()  )
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
    <main>
      <ul>
        {items.map((i) => (
          <li className="item">
            <input
              type="checkbox"
              onChange={() => handleCheck(i.id)}
              checked={i.checked}
            />
            <label
              onDoubleClick={() => handleCheck(i.id)}
              style={i.checked ? { textDecoration: "line-through" } : null}
            >
              {i.item}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(i.id)}
              role="button"
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
