const ToDoList = ({ toDoList, deleteToDo }) => {
  let toDoListReversed = [];
  for (let i = toDoList.length - 1; i >= 0; i--) {
    toDoListReversed = [...toDoListReversed, toDoList[i]];
  }
  return (
    <ul className="list-group mt-5">
      {toDoListReversed.map((item, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {item}
          <button
            type="button"
            className="btn btn-danger"
            key={index}
            onClick={() => deleteToDo(index)}
          >
            done
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
