import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
