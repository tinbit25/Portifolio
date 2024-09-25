import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faCertificate, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  

  return (

    <nav className={`nwidth h-full flex flex-col justify-between items-center p-4 `}>
      <div className="logo"> 
        <Link to="/" className="text-5xl satisfy-regular font-logo">Tinbite</Link>
      </div>
      <button onClick={toggleNavbar} className="md:hidden">
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-yellow-400" size="2x" />
      </button>
      <ul className={`space-y-1 ${isOpen ? 'block' : 'hidden'} mt-12 md:flex flex-col md:space-y-0 md:space-x-4`}>
        <li>
          <Link to="/" className="nav-link flex items-center ml-4">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> About
          </Link>
        </li>
        <li>
          <Link to="/works" className="nav-link flex items-center">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Works
          </Link>
        </li>
        <li>
          <Link to="/certificates" className="nav-link flex items-center">
            <FontAwesomeIcon icon={faCertificate} className="mr-2" /> Certificates
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
