import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [composition, setComposition] = useState(false);
  const [item, setItem] = useState("");
  const [toDoList, setToDoList] = useState([]);
  return (
    <div>
      <h1>Welcome to Tauri!</h1>
      <Form
        item={item}
        setItem={setItem}
        composition={composition}
        setComposition={setComposition}
        toDoList={toDoList}
        setToDoList={setToDoList}
      />
    </div>
  );
}

export default App;
