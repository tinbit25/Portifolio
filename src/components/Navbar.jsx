import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faCertificate, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className=" nwidth h-full  h-screen flex flex-col justify-around items-center ">
      <div className="mt-5">
        <Link to="/" className="text-3xl text-yellow-400 font-logo">Tinbite</Link>
      </div>
      <ul className="space-y-10">
        <li><Link to="/" className="nav-link flex items-center"><FontAwesomeIcon icon={faHome} className="mr-2" /> Home</Link></li>
        <li><Link to="/about" className="nav-link flex items-center"><FontAwesomeIcon icon={faUser} className="mr-2" /> About</Link></li>
        <li><Link to="/works" className="nav-link flex items-center"><FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Works</Link></li>
        <li><Link to="/certificates" className="nav-link flex items-center"><FontAwesomeIcon icon={faCertificate} className="mr-2" /> Certificates</Link></li>
        <li><Link to="/contact" className="nav-link flex items-center"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
