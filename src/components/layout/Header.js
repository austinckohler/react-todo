import React from "react";

function Header(props) {
  return (
    <header style={headerStyle}>
      <h1>To-Do's</h1>
    </header>
  );
}

const headerStyle = {
  background: "#33322a4f",
  textAlign: "center",
  padding: 15,
};
export default Header;
