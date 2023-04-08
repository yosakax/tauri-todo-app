import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "bootstrap";
import "./App.css";

function App() {
  const [composition, setComposition] = useState(false);
  const [item, setItem] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const addToDoList = (e) => {
    if (!composition && e.key === "Enter" && item !== "") {
      setToDoList([...toDoList, item]);
      setItem("");
    }
  };
  const addToDoListOnButton = () => {
    if (item !== "") {
      // setToDoList([...toDoList, item]);
      setToDoList([...toDoList, item]);
      setItem("");
    }
  };

  const deleteToDo = (deleteIndex) => {
    let itemLength = toDoList.length;
    const newToDoList = toDoList.filter((data, index) => {
      return index !== itemLength - deleteIndex - 1;
    });
    console.log(newToDoList);
    setToDoList(newToDoList);
  };

  return (
    <div>
      <h1>Tauri-React-ToDoList</h1>
      <Form
        item={item}
        setItem={setItem}
        setComposition={setComposition}
        addToDoList={addToDoList}
        addToDoListOnButton={addToDoListOnButton}
      />
      <ToDoList toDoList={toDoList} deleteToDo={deleteToDo} />
    </div>
  );
}

export default App;
