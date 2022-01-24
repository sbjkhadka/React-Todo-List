import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        "No todos to display"
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Todo Id</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.todos
                .slice(0)
                .reverse()
                .map((todo) => {
                  return (
                    <TableRow key={todo.sno}>
                      <TableCell>{todo.sno}</TableCell>
                      <TableCell>{todo.title}</TableCell>
                      <TableCell>{todo.description}</TableCell>
                      <TableCell align="right">
                        <button
                          className="btn btn-outline-danger btn-sm mx-1"
                          onClick={() => {
                            props.onDelete(todo);
                          }}
                        >
                          Delete
                        </button>

                        <button
                          className="btn btn-outline-primary btn-sm mx-1"
                          onClick={() => {
                            props.onEditClick(todo);
                          }}
                        >
                          Edit
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
