import { useState } from "react";

const Form = ({
  item,
  setItem,
  setComposition,
  addToDoList,
  addToDoListOnButton,
}) => {
  return (
    <div className="container justify-content-center">
      <div className="d-flex">
        <input
          type="text"
          id="input-a"
          className="form-control"
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
        <button
          className="btn btn-primary ms-3"
          type="submit"
          onClick={addToDoListOnButton}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Form;
