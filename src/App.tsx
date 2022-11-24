import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  // useState e type verme
  const [todo, setTodo] = useState<string>("");

  // Todo interfaceine bağlı bir state belirledik.
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
