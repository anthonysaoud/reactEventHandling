import React, { useState } from "react";

function App() {
  const [currentText, setNewText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState("false");
  const [isMouseOut, setMouseOut] = useState("true");

  function handleClick() {
    setNewText("Button was Clicked");
  }

  function handleIsMouseOver() {
    setMouseOver("true");
  }

  function handleIsMouseOut() {
    setMouseOver("false");
  }

  return (
    <div className="container">
      <h1>{currentText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{
          backgroundColor:
            isMouseOver === "true" || isMouseOut === "false" ? "black" : "white"
        }}
        onClick={handleClick}
        onMouseOver={handleIsMouseOver}
        onMouseOut={handleIsMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
