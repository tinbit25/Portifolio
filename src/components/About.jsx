import React from 'react';
import backgroundImg from "../assets/images/modern-black-lines-background-vector.jpg"; 

const About = () => {
  return (
    <div 
      className="container bg-cover bg-center h-screen flex flex-col items-center justify-center" 
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h2 className="section-title text-white text-4xl mb-4">About Me</h2>
      <p className="section-subtitle text-white text-xl mb-4">Learn more about my background and experience.</p>
      <p className="text-white text-lg text-center">
        I am a full-stack developer with a passion for creating engaging digital experiences...
      </p>
    </div>
  );
};

export default About;
