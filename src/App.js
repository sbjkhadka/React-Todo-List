import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { About } from "./MyComponents/About";
import "./App.css";
import React, { useEffect, useState } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const dummyTodo = {
    sno: 0,
    title: "Your Title",
    description: "Your Description",
  };
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(dummyTodo);

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

  const onEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const addTodo = (todoObject) => {
    let myTodo = {
      sno: Math.max(...todos.map((o) => o.sno), 0) + 1,
      title: todoObject.title,
      description: todoObject.desc,
    };
    if (isEditing) {
      myTodo.sno = todoObject.sno;
      setIsEditing(false);
      setCurrentTodo(dummyTodo);

      const temp = todos.filter((e) => {
        return e.sno !== todoObject.sno;
      });

      setTodos([...temp, myTodo]);
    } else {
      setTodos([...todos, myTodo]);
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentTodo(dummyTodo);
  };

  return (
    <Router>
      <Header title="My Todo List" searchBar={false} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <AddTodo
                addTodo={addTodo}
                displayTodo={currentTodo}
                isEditing={isEditing}
                cancelled = {cancelEdit}
              />
              <Todos
                todos={todos}
                onDelete={onDelete}
                onEditClick={onEditClick}
              />
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
