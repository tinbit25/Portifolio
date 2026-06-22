import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React",       pct: 90 },
  { name: "JavaScript",  pct: 88 },
  { name: "Node.js",     pct: 82 },
  { name: "HTML & CSS",  pct: 95 },
  { name: "MongoDB",     pct: 75 },
  { name: "Git & GitHub",pct: 85 },
];

const techStack = [
  { icon: <FaReact    size={18} color="#61DAFB" />, label: "React"      },
  { icon: <SiJavascript size={18} color="#F7DF1E" />, label: "JavaScript" },
  { icon: <FaNodeJs   size={18} color="#68A063" />, label: "Node.js"    },
  { icon: <SiExpress  size={18} color="#888"    />, label: "Express"    },
  { icon: <SiMongodb  size={18} color="#47A248" />, label: "MongoDB"    },
  { icon: <SiTailwindcss size={18} color="#38BDF8" />, label: "Tailwind"  },
  { icon: <FaGitAlt   size={18} color="#F05032" />, label: "Git"        },
  { icon: <FaDatabase size={18} color="#f5a623" />, label: "SQL"        },
];

const infoItems = [
  { label: "Email",    value: <a href="mailto:tinbitelias25@gmail.com">tinbitelias25@gmail.com</a> },
  { label: "Phone",    value: "+251-976330367" },
  { label: "Location", value: "Debre Birhan, Ethiopia" },
  { label: "Languages",value: "English, Amharic" },
  { label: "GitHub",   value: <a href="https://github.com/Tinbit25" target="_blank" rel="noopener noreferrer">github.com/Tinbit25</a> },
  { label: "LinkedIn", value: <a href="https://www.linkedin.com/in/tinbite-elias" target="_blank" rel="noopener noreferrer">linkedin.com/in/tinbite-elias</a> },
];

const About = () => {
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [barsAnimated, setBarsAnimated] = useState(false);

  // Fade-up on each section using IntersectionObserver
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Skill bars animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          // Delay bar fill so the element is visible first
          setTimeout(() => setBarsAnimated(true), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="page-section">
      <h1 className="section-title">
        About <span>Me</span>
      </h1>
      <div className="section-divider" />

      {/* ── Bio + Info Grid ── */}
      <div className="about-grid fade-up">
        <div>
          <p className="about-bio">
            I&apos;m a <strong>full-stack web developer</strong> with expertise in
            React and Node.js, focused on creating dynamic and responsive web
            applications. Passionate about solving real-world challenges through
            technology, I&apos;m eager to collaborate with others to develop
            innovative solutions.
          </p>
          <br />
          <p className="about-bio">
            When I&apos;m not coding, I enjoy exploring new frameworks, contributing
            to open source, and expanding my knowledge in software architecture
            and design patterns.
          </p>
        </div>

        <div className="info-grid">
          {infoItems.map(({ label, value }) => (
            <div key={label} className="info-item">
              <p className="info-label">{label}</p>
              <p className="info-value">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills ── */}
      <div className="skills-section fade-up" ref={skillsRef}>
        <h3>Technical Skills</h3>
        <div className="skill-bar-group">
          {skills.map(({ name, pct }, i) => (
            <div
              key={name}
              className={`skill-bar-item ${skillsVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="skill-bar-header">
                <span className="skill-name">{name}</span>
                <span className="skill-pct">{pct}%</span>
              </div>
              <div className="skill-track">
                <div
                  className={`skill-fill ${barsAnimated ? "animated" : ""}`}
                  style={{ width: barsAnimated ? `${pct}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tech Chips ── */}
      <div className="fade-up" style={{ marginTop: "2.5rem" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
          Tech Stack
        </h3>
        <div className="tech-icons">
          {techStack.map(({ icon, label }) => (
            <div key={label} className="tech-chip">
              {icon}
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
