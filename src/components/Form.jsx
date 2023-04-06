import { useState } from "react";

const Form = ({
  item,
  setItem,
  composition,
  setComposition,
  toDoList,
  setToDoList,
}) => {
  const addToDoList = (e) => {
    if (!composition && e.key === "Enter" && item !== "") {
      setToDoList([...toDoList, item]);
      setItem("");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <input
          id="input-a"
          onChange={(e) => {
            e.preventDefault();
            setItem(e.currentTarget.value);
          }}
          onCompositionStart={() => setComposition(true)}
          onCompositionEnd={() => setComposition(false)}
          onKeyDown={(e) => addToDoList(e)}
          value={item}
          placeholder="Enter Next Work!"
        />
        <button type="submit" onClick={addToDoList}>
          ADD
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((todo, index) => (
            <div className="row" key={index}>
              <li>{todo}</li>
              <button className="btn btn-primary">done</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
