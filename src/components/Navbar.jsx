import React from "react";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img className="nav--logo_icon" src="./assets/react.svg" alt="" />
      <h3 className="nav--logo_text"> React Facts</h3>
      <div className="toggler">
        <p className="toggler--light">Ligth</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
