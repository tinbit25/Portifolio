import React, { useEffect } from 'react';
import portifolio from '../assets/images/portifolio.png';
import pomodoro from '../assets/images/pomodoro.png';
import pomodoro2 from '../assets/images/pomodoro2.png';
import church from '../assets/images/orthdox.png';
import kravinz from '../assets/images/kravinz.png';

const Works = ({ theme }) => {
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 200);
    });
  }, []);

  return (
    <div className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} container`}>
      <h2 className="section-title">My Works</h2>
      <p className="section-subtitle">Current and Upcoming Projects:</p>
      <div className="project-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

        <div className="project-card shadow-lg rounded-lg overflow-hidden opacity-0 transform translate-y-10">
          <img src={portifolio} alt="Portfolio" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg text-orange-300">Personal Portfolio</h3>
            <p className="text-white playpen-sans">A responsive portfolio website showcasing my skills, projects, and experiences.</p>
          </div>
        </div>

        <div className="project-card shadow-lg rounded-lg overflow-hidden opacity-0 transform translate-y-10">
          <img src={kravinz} alt="Kravinz Project" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg text-orange-300">Kravinz</h3>
            <p className="text-white playpen-sans">I developed Kravinz, a platform that simplifies the food experience for expatriates by providing meal plans and in-home cooking services with culturally familiar ingredients, enhancing their settling-in process.</p>
          </div>
        </div>

        <div className="project-card shadow-lg rounded-lg overflow-hidden opacity-0 transform translate-y-10">
          <img src={church} alt="Sunday Church Website" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg text-orange-500">Sunday Church Website</h3>
            <p className="text-white playpen-sans">Coming Soon: A website designed for the Sunday church, providing information on services and events.</p>
          </div>
        </div>

        <div className="project-card shadow-lg rounded-lg overflow-hidden opacity-0 transform translate-y-10">
          <div className="flex flex-row justify-between space-x-4">
        <img src={pomodoro} alt="Pomodoro Timer Project" className="project-image h-60 pl-10 object-cover" />
        <img src={pomodoro2} alt="Pomodoro Timer Project" className="project-image pr-16 h-60 object-cover" />
        </div>
          <div className="p-4">
            <h3 className="font-bold text-lg text-indigo-600">Pomodoro Timer</h3>
            <p className="text-white playpen-sans text-md leading-relaxed">
              A Pomodoro Timer extension to help users manage their time effectively and stay productive.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Works;
