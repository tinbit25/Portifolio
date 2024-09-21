import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="navi bg-gray-900 flex flex-col md:flex-row">
        {/* Navbar on the left */}
        <div className="bg-gray-900 h-full md:h-auto">
          <Navbar />
        </div>
        
        {/* Content on the right */}
        <div className="bg-gray-900 w-full p-5 md:p-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;