import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="s-footer bg-[#181818] bg-opacity-90 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-between mb-12">
          <div className="w-full pr-10 md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-lg font-semibold mb-4">About Tinbite</h3>
            <p className="text-gray-400">
              Tinbite Elias is a dedicated software engineering student with a passion for both front-end and back-end development. With expertise in React, JavaScript, and modern web technologies, Tinbite is committed to crafting innovative web applications. Their goal is to leverage technology to address local and global challenges, continuously expanding their skills to achieve proficiency as a full-stack developer. Driven by a deep interest in solving real-world problems through technology, Tinbite aspires to create impactful solutions and contribute meaningfully to the field of web development.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-lg font-semibold mb-4">Site Links</h3>
            <ul className="list-none space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="contact-block mb-4">
              <h6 className="text-lg font-semibold mb-2">Email</h6>
              <a href="mailto:tinbitelias25@gmail.com" className="text-gray-400 hover:text-white">tinbitelias25@gmail.com</a>
            </div>
            <div className="contact-block">
              <h6 className="text-lg font-semibold mb-2">Phone</h6>
              <ul className="contact-list list-none space-y-1 text-gray-400">
                <li><a href="tel:+251976330367" className="hover:text-white">+251 976 33 03 67</a></li>
                <li><a href="tel:+251976330368" className="hover:text-white">+251 976 33 03 68</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 mt-12">
          <h6 className="text-lg font-semibold mb-4">Follow On Social</h6>
          <ul className="flex space-x-4">
            <li><a href="https://github.com/Tinbit25" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="text-gray-400 hover:text-white" /></a></li>
            <li><a href="https://www.linkedin.com/in/tinbite-elias-40409a317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-white" /></a></li>
            <li><a href="https://www.instagram.com/tinbite_elias/?target_user_id=45083037375&ndid=6205af697f38cG24bc375a22cebfG6205b402df65fG9e4&utm_medium=email&utm_campaign=ig_suspicious_login&__bp=1" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} className="text-gray-400 hover:text-white" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
