import React from "react";
import { useState } from "react";

const Main2 = () => {
  const [name, setName] = useState("Amber");

  const fetchName = () => {
    const name = ["Sadeed", "CJ", "Safar", "Lidya", "Allan", "Iyo"];
    const y = Math.floor(Math.random() * 6);
    return setName(name[y]);
  };

  return (
    <>
      <h1>Welcome {name}</h1>
      <button onClick={fetchName}>Click</button>
    </>
  );
};

export default Main2;
