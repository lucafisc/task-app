import Overview from "./components/Overview";
import React from "react";
import { nanoid } from "nanoid";
import "./style.css";

function App() {
  const [itemsArray, setItemsArray] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function submitNote() {
    setItemsArray((prevArray) => [...prevArray, inputValue]);
    setInputValue("");
  }

  const items = itemsArray.map((item, index) => {
    return <Overview title={item} number={index} key={nanoid()} />;
  });

  return (
    <div className="app">
      <div className="input">
        <input type="text" onChange={handleChange} value={inputValue} />
        <button onClick={submitNote}>+</button>
      </div>
      <div className="list">{items}</div>
    </div>
  );
}

export default App;
