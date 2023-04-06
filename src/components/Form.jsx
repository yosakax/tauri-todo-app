import { useState } from "react";

const Form = () => {
  const [composition, setComposition] = useState(false);
  const [item, setItem] = useState("");
  const [toDoList, setToDoList] = useState([]);
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
          // placeholder="Enter a value a"
          value={item}
        />
        <button type="submit" onClick={addToDoList}>
          ADD
        </button>
      </div>
      <div>
        {toDoList.map((todo, index) => (
          <div className="row" key={index}>
            <p>{todo}</p>
            <button className="btn btn-primary">done</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
