import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaTelegram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/tinbite-elias",
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Tinbit25",
    icon: <FaGithub size={18} />,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/tinbite_elias",
    icon: <FaInstagram size={18} />,
    label: "Instagram",
  },
  {
    href: "https://t.me/MTinasT",
    icon: <FaTelegram size={18} />,
    label: "Telegram",
  },
];

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage]   = useState("");
  const [isVisible, setIsVisible]         = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xovaodnn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setErrorMessage("");
      } else {
        setErrorMessage("Submission failed. Please try again later.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <section className="page-section">
      <h1 className="section-title">
        Let&apos;s <span>Connect</span>
      </h1>
      <div className="section-divider" />

      <div className="contact-layout">
        <p className="contact-intro">
          I&apos;m always excited to discuss new projects or opportunities.
          Feel free to reach out through the form below or any of the channels
          listed.
        </p>

        {/* ── Contact Form ── */}
        <div className={`contact-form-card ${isVisible ? "slide-in" : ""}`}>
          {formSubmitted ? (
            <div className="success-card">
              <h2>Thank you! 🎉</h2>
              <p style={{ color: "var(--text-secondary)" }}>
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {errorMessage && (
                <p className="error-msg">{errorMessage}</p>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="btn-submit">
                <FiSend size={16} style={{ marginRight: "0.5rem" }} />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* ── Social Links ── */}
        <div className="contact-socials">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label={label}
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;