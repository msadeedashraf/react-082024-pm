import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Main = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
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

  return (
    <main>
      <ul>
        {items.map((i) => (
          <li className="item">
            <input type="checkbox" checked={i.checked} />
            <label>{i.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
