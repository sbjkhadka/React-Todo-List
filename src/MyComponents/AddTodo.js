import React from "react";
import { useState } from "react/cjs/react.development";

export const AddTodo = (props) => {
    const [title, setTitle] = useState("title");
    const [desc, setDesc] = useState("desc");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc) {
            alert("Title or description cannot be blank!")
        } else {
            props.addTodo(title, desc);
        }
        
    };
  return (
    <div className="container">
      <h3 className="my-3 text-center">Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
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
            Todo Description
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

        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};
