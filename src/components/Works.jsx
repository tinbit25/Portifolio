import React from 'react';

const Works = () => {
  return (
    <div className="container">
      <h2 className="section-title">Works</h2>
      <p className="section-subtitle">My Last Projects :</p>
      <div className="project-gallery">
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project 1" className="project-image"/>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project 2" className="project-image"/>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project 3" className="project-image"/>
        </div>
      </div>
    </div>
  );
};

export default Works;
