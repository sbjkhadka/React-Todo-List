import React from 'react';
import { TodoItem } from './Todo';

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <div key={todo.sno}>
                <TodoItem
                  todo={todo}
                  onDelete={props.onDelete}
                />
                <hr />
              </div>
            );
          })}
    </div>
  );
};

