import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export const AddTodo = (props) => {
  const [title, setTitle] = useState(props.displayTodo.title);
  const [desc, setDesc] = useState(props.displayTodo.description);
  useEffect(() => {
    setTitle(props.displayTodo.title);
    setDesc(props.displayTodo.description);
  }, [props]);
  const submit = (e) => {
    e.preventDefault();
    const todoObject = {
      sno: props.displayTodo.sno,
      title,
      desc
    };
    if (!title || !desc) {
      alert("Title or description cannot be blank!");
    } else {
      props.addTodo(todoObject);
    }
  };
  return (
    <div className="container">
      <h3 className="my-3 text-center">
        {props.isEditing ? (
          <span className="text-primary">Edit Todo</span>
        ) : (
          <span className="text-success">Add Todo</span>
        )}
      </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
            autoComplete="false"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            autoComplete="false"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        {props.isEditing ? (
          <>
            <button type="submit" className="btn btn-primary btn-sm mx-1">
              Edit Todo
            </button>
            <button className="btn btn-outline-danger btn-sm mx-1" onClick={() => props.cancelled}>
              Cancel
            </button>
          </>
        ) : (
          <button type="submit" className="btn btn-success btn-sm">
            Add Todo
          </button>
        )}
      </form>
    </div>
  );
};
