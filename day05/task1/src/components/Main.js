import React from "react";

const Main = (props) => {
  return (
    <>
      <p>We serve the {props.adjective} food in the whole GTA.</p>
      <br />
      <img
        height={200}
        src="../images/restaurant.jpeg"
        alt="A server presents two plates at a fancy restaurant"
      />

      <ul>
        {props.dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </ul>
      <br />
    </>
  );
};

export default Main;
