import React, { useState } from "react";

const Usestate = () => {
  const [brand, setBrand] = useState("Honda");
  const [model, setModel] = useState("Civic");
  const [year, setYear] = useState("2025");
  const [color, setColor] = useState("White");

  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Rav",
    year: 2024,
    color: "black",
  });

  const [count, setCount] = useState(10);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count);
  };

  //Spread Operator

  console.log(car);

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        Its a {car.color} {car.model} and the year {car.year}
      </p>
      <br />
      <hr></hr>
      <h1>My {brand}</h1>
      <p>
        Its a {color} {model} and the year {year}
      </p>
      <br />
      <hr></hr>

      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click</button>
    </>
  );
};

export default Usestate;
