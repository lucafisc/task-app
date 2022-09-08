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
    if (inputValue) {
      setItemsArray((prevArray) => [...prevArray, inputValue]);
      setInputValue("");
    }
  }

  function deleteNote(id) {
    setItemsArray((prevArray) =>
      prevArray.filter((item) => {
        return prevArray.indexOf(item) !== id;
      })
    );
  }

  const items = itemsArray.map((item, index) => {
    return (
      <Overview
        title={item}
        number={index}
        key={index}
        deleteNote={deleteNote}
      />
    );
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
