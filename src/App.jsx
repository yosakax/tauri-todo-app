import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <h1>Welcome to Tauri!</h1>
      <Form />
    </div>
  );
}

export default App;
