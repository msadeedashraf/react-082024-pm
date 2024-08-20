import React from "react";

const Main = () => {
  const fetchName = () => {
    const name = ["Sadeed", "CJ", "Safar", "Lidya", "Allan", "Iyo"];
    const y = Math.floor(Math.random() * 6);
    return name[y];
  };

  //const functioname/variablename = () => {}
  const myClick = () => {
    console.log("You pressed the button");
  };

  const handleClick = () => {
    console.log(`${fetchName()}`);
  };

  const handleClick2 = (name) => {
    console.log(`${name} cliked me`);
  };

  const handleClick3 = (e) => {
    console.log(e.target);
  };

  return (
    <section>
      <h3> {fetchName()} is learning to code</h3>

      <img width={300} height={200} src="/images/coding.jpg" alt="" />
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <button onClick={myClick}>Click Me</button>
      <button onClick={() => handleClick2("sadeed")}>Click Me</button>
      <button onClick={(e) => handleClick3(e)}>Click Me</button>
    </section>
  );
};

export default Main;
