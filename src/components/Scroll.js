import React from "react";

const Scroll = ({ children }) => {
  return (
    <div style={{ overflowY: 'scroll', border: '5px solid black', height: '80vh' }}>
      {children}
    </div>
  );
};

export default Scroll;