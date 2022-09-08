import React from "react";

export default function Overview(props) {
  const [edit, setEdit] = React.useState(false);
  function toggleEdit() {
    setEdit((prevValue) => !prevValue);
  }
  return (
    <div className="item">
      <div className="number">
        <h1>{props.number}</h1>
      </div>

      <div className="title">
        {edit ? (
          <div className="editor">
            <input
              value={props.title}
              onChange={(event) => props.editNote(event, props.number)}
            />
            <button onClick={toggleEdit}>✓</button>
          </div>
        ) : (
          <h1 onClick={toggleEdit}>{props.title}</h1>
        )}
      </div>

      <button className="button" onClick={() => props.deleteNote(props.number)}>
        X
      </button>
    </div>
  );
}
