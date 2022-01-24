import React from 'react';
import './footer.css';

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    width: "100vw",
    bottom:0,
    border: "1px solid red"
  }
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  );
};
