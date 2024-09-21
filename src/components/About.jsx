import React, { useEffect } from 'react';
import { FaReact, FaNodeJs, FaCode } from 'react-icons/fa'; 

const About = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.slide-in');
    textElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('show');
      }, index * 300); // Adjust delay (300ms) between each element's animation
    });
  }, []);

  return (
    <div 
      className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center" 
    >
      <div className="absolute inset-0 bg-black opacity-50" /> 
      <div className="relative z-10 text-center p-4">
        <h2 className="section-title text-white text-4xl mb-4 slide-in">About Me</h2>
        

        <p className="text-white text-lg mb-6 slide-in">
        I am a full-stack web developer with expertise in React and Node.js, focused on creating dynamic and responsive web applications. Passionate about solving real-world challenges through technology, I'm eager to collaborate with others to develop innovative solutions. Let’s connect and build something impactful together!
        </p>

        {/* Skill Icons */}
        <div className="flex justify-center space-x-8 mb-8 slide-in">
          <div className="text-center">
            <FaReact className="text-5xl text-blue-500 mb-2" />
            <h3 className="text-white">React</h3>
          </div>
          <div className="text-center">
            <FaNodeJs className="text-5xl text-green-500 mb-2" />
            <h3 className="text-white">Node.js</h3>
          </div>
          <div className="text-center">
            <FaCode className="text-5xl text-yellow-500 mb-2" />
            <h3 className="text-white">JavaScript</h3>
          </div>
        </div>

        {/* Testimonial/Quote */}
        <blockquote className="text-white italic mb-4 slide-in">
          "Great developers build solutions, but great developers build relationships."
        </blockquote>

        {/* Smooth Slide Effect */}
        <div className="mt-4 slide-in">
          <a href="https://linkedin.com/in/your-profile" className="text-white mx-2">LinkedIn</a>
          <a href="https://github.com/your-profile" className="text-white mx-2">GitHub</a>
        </div>
      </div>

      <style jsx>{`
        .slide-in {
          transform: translateY(20px);
          opacity: 0;
        }
        .show {
          transform: translateY(0);
          opacity: 1;
          transition: transform 0.6s ease-out, opacity 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;
