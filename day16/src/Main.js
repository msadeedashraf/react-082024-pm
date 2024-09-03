import React from "react";

import ItemList from "./ItemList";

const Main = ({ items, setItems, handleCheck, handleDelete }) => {
  //map
  //Array.map( () => ()  )

  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </main>
  );
};

export default Main;
