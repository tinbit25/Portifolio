import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faCertificate, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="nwidth h-full flex flex-col justify-between items-center p-4">
      {/* Logo */}
      <div className="logo"> 
        <Link to="/" className="hidden md:block text-5xl satisfy-regular font-logo">Tinbite</Link>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <ul className="mt-12 flex flex-row justify-between items-center md:flex-col">
          <li>
            <Link to="/" className="nav-link flex items-center ml-4">
              <FontAwesomeIcon icon={faHome} className="mr-2 hidden md:block" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2 hidden md:block" /> About
            </Link>
          </li>
          <li>
            <Link to="/works" className="nav-link flex items-center">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2 hidden md:block" /> Works
            </Link>
          </li>
          <li>
            <Link to="/certificates" className="nav-link md:ml-8 flex items-center">
              <FontAwesomeIcon icon={faCertificate} className="mr-2 hidden md:block" /> Certificates
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link flex md:ml-3 items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 hidden md:block" /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
