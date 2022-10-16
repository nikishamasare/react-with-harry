import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("dark mode enabled", "success");
    } else {
      setMode("light");
      showAlert("light mode enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
         <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading='Enter the text to analyize' />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
