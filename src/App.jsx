import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css"; 

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <Router>
      <div className={`app-container  ${theme}`}>
        <button
          onClick={toggleTheme}
          className="toggle-button absolute right-12 top-4 bg-transparent text-2xl flex items-center transition-transform duration-200 hover:scale-105"
          aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
          {theme === "light" ? (
            <MoonIcon className="text-yellow-400 w-8 h-8 transition-colors duration-200 hover:text-yellow-500" />
          ) : (
            <SunIcon className="text-yellow-400 w-8 h-8 transition-colors duration-200 hover:text-yellow-500" />
          )}
        </button>

        <div className="navi flex flex-col md:flex-row">
          <div className="h-full md:h-auto">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
          </div>

          <div className="w-full p-5 md:p-10 flex-grow">
            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/about" element={<About theme={theme} />} />
              <Route path="/works" element={<Works theme={theme} />} />
              <Route path="/certificates" element={<Certificates theme={theme} />} />
              <Route path="/contact" element={<Contact theme={theme} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
