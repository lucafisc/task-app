import Overview from "./components/Overview";
import React from "react";
import { nanoid } from "nanoid";

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

  const items = itemsArray.map((item) => {
    return <Overview title={item} key={nanoid()} />;
  });

  return (
    <>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={submitNote}>Submit</button>
      {items}
    </>
  );
}

export default App;
