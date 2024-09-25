import React, { useEffect } from 'react';
import portifolio from '../assets/images/portifolio.png';
import adoption from '../assets/images/Screenshot 2024-09-20 225055.png';
import church from '../assets/images/orthdox.png';
// import registration from '../assets/images/Untitled design (4).png';

const Works = ({theme} ) => {
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
          <img src={church} alt="Upcoming Project" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg text-orange-500">Sunday Church Website</h3>
            <p className="text-white playpen-sans">Coming Soon: A website designed for the Sunday church, providing information on services and events.</p>
          </div>
        </div>

        <div className="project-card shadow-lg rounded-lg overflow-hidden opacity-0 transform translate-y-10">
          <img src={adoption} alt="Upcoming Project" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg text-indigo-600">Make Your Home - Adoption Platform</h3>
            <p className="text-white playpen-sans text-md leading-relaxed">Coming Soon: A platform dedicated to connecting children with their adoptive families, offering resources and guidance for both families and children.</p>
          </div>
        </div>

        <div className="project-card shadow-lg rounded-lg overflow-hidden opacity-0 transform translate-y-10">
          <img src=""alt="Upcoming Project" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg text-red-300">Job Board for Tinas Tutoring Team</h3>
            <p className="text-white playpen-sans">Coming Soon: A job board platform connecting tutors and students, featuring job listings and applications.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          transition: transform 0.6s ease-out, opacity 0.6s ease-out;
        }
        .project-card.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Works;
