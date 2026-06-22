import React, { useEffect, useState } from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import ppicture from "../assets/images/mypic-removebg.png";

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="page-section">
      <div className="home-layout">
        {/* ── Text Side ── */}
        <div className="home-text">
          <p className={`home-greeting ${visible ? "visible" : ""}`}>
            👋 Hello, I&apos;m
          </p>

          <h1 className={`home-heading ${visible ? "visible" : ""}`}>
            Tinbite Elias
          </h1>

          <p className={`home-bio ${visible ? "visible" : ""}`}>
            A passionate <strong>full-stack web developer</strong> focused on
            building impactful, responsive digital experiences. I work across
            the stack — from intuitive React UIs to robust Node.js backends.
          </p>

          <div className={`home-actions ${visible ? "visible" : ""}`}>
            <a
              href="/resume/tinbite resume (2).pdf"
              download
              className="btn-primary"
            >
              <FiDownload size={16} />
              Download Resume
            </a>
            <Link to="/works" className="btn-secondary">
              View My Work
              <FiArrowRight size={16} />
            </Link>
          </div>

          <div className={`home-social ${visible ? "visible" : ""}`}>
            <a
              href="https://www.linkedin.com/in/tinbite-elias"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Tinbit25"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/tinbite_elias"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/MTinasT"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* ── Image Side ── */}
        <div className={`home-image ${visible ? "visible" : ""}`}>
          <img
            src={ppicture}
            alt="Tinbite Elias — Full-Stack Developer"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;