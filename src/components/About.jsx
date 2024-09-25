import React, { useEffect } from 'react';
import { FaReact, FaNodeJs, FaCode } from 'react-icons/fa'; 

const About = ({theme} ) => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.slide-in');
    textElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('show');
      }, index * 300); 
    });
  }, []);

  return (
    <div 
      className={`${theme === 'light' ? 'text-gray-800' : 'text-white'}  about relative h-screen flex flex-col items-center justify-center`} 
    >
      <div className="absolute inset-0 " /> 
      <div className={`${theme === 'light' ? 'text-gray-800' : 'text-white'}relative z-10 text-center p-4`}>
        <h2 className={` section-title  text-4xl mb-4 slide-in`}>About Me</h2>
        

        <p className=" text-lg mb-6 slide-in">
        I am a full-stack web developer with expertise in React and Node.js, focused on creating dynamic and responsive web applications. Passionate about solving real-world challenges through technology, I'm eager to collaborate with others to develop innovative solutions. Let’s connect and build something impactful together!
        </p>

        <div className="flex justify-center space-x-8 mb-8 slide-in">
          <div className="text-center">
            <FaReact className="text-5xl text-blue-500 mb-2" />
            <h3 className="">React</h3>
          </div>
          <div className="text-center">
            <FaNodeJs className="text-5xl text-green-500 mb-2" />
            <h3 className="">Node.js</h3>
          </div>
          <div className="text-center">
            <FaCode className="text-5xl text-yellow-500 mb-2" />
            <h3 className="">JavaScript</h3>
          </div>
        </div>

        
        <blockquote className=" italic mb-4 slide-in">
          "Great developers build solutions, but great developers build relationships."
        </blockquote>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 slide-in">
          <div className="border-b border-gray-300 pb-2 mb-4 hover:bg-gray-700 transition duration-300">
            <h3 className=" text-sm sm:text-lg mb-1">Email:</h3>
            <p className="text-gray-300 text-xs sm:text-base">
              <a href="mailto:tinbitelias25@gmail.com">tinbitelias25@gmail.com</a>
            </p>
          </div>
          <div className="border-b border-gray-300 pb-2 mb-4 hover:bg-gray-700 transition duration-300">
            <h3 className=" text-sm sm:text-lg mb-1">Phone:</h3>
            <p className="text-gray-300 text-xs sm:text-base">+251-976330367</p>
          </div>

          <div className="border-b border-gray-300 pb-2 mb-4 hover:bg-gray-700 transition duration-300">
            <h3 className=" text-sm sm:text-lg mb-1">City:</h3>
            <p className="text-gray-300 text-xs sm:text-base">Debre Birhan, Ethiopia</p>
          </div>

          <div className="border-b border-gray-300 pb-2 mb-4 hover:bg-gray-700 transition duration-300">
            <h3 className=" text-sm sm:text-lg mb-1">Language:</h3>
            <p className="text-gray-300 text-xs sm:text-base">English, Amharic</p>
          </div>

          <div className="border-b border-gray-300 pb-2 mb-4 hover:bg-gray-700 transition duration-300">
            <h3 className=" text-sm sm:text-lg mb-1">GitHub:</h3>
            <p className="text-gray-300 text-xs sm:text-base">
              <a href="https://github.com/Tinbit25" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </p>
          </div>

          <div className="border-b border-gray-300 pb-2 mb-4 hover:bg-gray-700 transition duration-300">
            <h3 className=" text-sm sm:text-lg mb-1">LinkedIn:</h3>
            <p className="text-gray-300 text-xs sm:text-base">
              <a href="https://www.linkedin.com/in/tinbite-elias" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </p>
          </div>
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
