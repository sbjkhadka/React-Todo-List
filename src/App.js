import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { About } from "./MyComponents/About";
import "./App.css";
import React, { useEffect, useState } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    const myTodo = {
      sno: Math.max(...todos.map((o) => o.sno), 0) + 1,
      title: title,
      description: desc,
    };
    setTodos([...todos, myTodo]);
  };

  return (
    <Router>
      <Header title="My Todo List" searchBar={false} />
      <Routes>
        <Route
          exact path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
