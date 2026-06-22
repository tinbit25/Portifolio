import React, { useEffect, useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import portifolio from "../assets/images/portifolio.png";
import zapfood    from "../assets/images/zapfood.png";
import church     from "../assets/images/orthdox.png";
import kravinz    from "../assets/images/kravinz.png";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website showcasing my skills, projects, and experiences. Built with React + Vite and deployed on Vercel.",
    image: portifolio,
    alt: "Personal Portfolio screenshot",
    tags: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/tinbit25/Portifolio",
    demo: "https://tinbitelias.vercel.app/",
  },
  {
    title: "Kravinz",
    description:
      "A platform that simplifies the food experience for expatriates by providing meal plans and in-home cooking services with culturally familiar ingredients.",
    image: kravinz,
    alt: "Kravinz platform screenshot",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/tinbit25/Kravins-Project",
    demo: "https://charming-starlight-c9b3b6.netlify.app/",
  },
  {
    title: "Sunday Church Website",
    description:
      "A website designed for the Sunday church community, providing information on services, sermons, and upcoming events.",
    image: church,
    alt: "Sunday Church Website screenshot",
    tags: ["React", "CSS", "Firebase"],
    github: "https://github.com/tinbit25/ChurchApp",
    demo: null,
  },
  {
    title: "ZapFood",
    description:
      "A native Android mobile application for food ordering and delivery. Implemented fully with Kotlin, featuring real-time order tracking, secure checkouts, and premium UI.",
    image: zapfood,
    alt: "ZapFood mobile application mockup",
    tags: ["Kotlin", "Android SDK", "Firebase", "MVVM"],
    github: "https://github.com/tinbit25/ZapFood",
    demo: null,
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const el = cardRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className="project-card"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={project.alt}
          className="project-img"
        />
        <div className="project-overlay">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="overlay-btn outline"
              aria-label={`${project.title} GitHub`}
            >
              <FiGithub size={15} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="overlay-btn"
              aria-label={`${project.title} Live Demo`}
            >
              <FiExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Works = () => {
  return (
    <section className="page-section">
      <h1 className="section-title">
        My <span>Works</span>
      </h1>
      <div className="section-divider" />
      <p className="section-subtitle">
        A selection of projects I&apos;ve built — hover to see links.
      </p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Works;
