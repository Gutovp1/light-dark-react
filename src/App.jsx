import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
