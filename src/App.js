import Overview from "./components/Overview";
import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import "./style.css";

function App() {
  const [itemsArray, setItemsArray] = React.useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
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

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      submitNote();
    }
  }

  function deleteNote(id) {
    setItemsArray((prevArray) =>
      prevArray.filter((item, index) => {
        return id !== index;
      })
    );
  }

  function editNote(event, id) {
    const value = event.target.value;
    setItemsArray((prevArray) =>
      prevArray.map((item) => {
        if (prevArray.indexOf(item) === id) {
          return value;
        } else {
          return item;
        }
      })
    );
  }

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(itemsArray));
  }, [itemsArray]);

  const items = itemsArray.map((item, index) => {
    return (
      <Overview
        title={item}
        number={index}
        key={index}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    );
  });

  return (
    <div className="app">
      <Title />
      <div className="input">
        <input
          placeholder="new task"
          type="text"
          onChange={handleChange}
          value={inputValue}
          onKeyPress={handleKeyPress}
        />
        <button onClick={submitNote}>+</button>
      </div>
      <div className="list">{items}</div>
    </div>
  );
}

function Title() {
  useEffect(() => {
    document.title = "tasks";
  }, []);

  return <></>;
}

export default App;
