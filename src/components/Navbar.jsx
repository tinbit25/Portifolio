import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiAward,
  FiMail,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navItems = [
  { to: "/",             label: "Home",         icon: <FiHome /> },
  { to: "/about",        label: "About",        icon: <FiUser /> },
  { to: "/works",        label: "Works",        icon: <FiBriefcase /> },
  { to: "/certificates", label: "Certificates", icon: <FiAward /> },
  { to: "/contact",      label: "Contact",      icon: <FiMail /> },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside className="sidebar">
        <NavLink to="/" className="sidebar-logo">
          Tinbite
        </NavLink>

        <ul className="nav-list">
          {navItems.map(({ to, label, icon }) => (
            <li key={to} className="nav-item">
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <span className="nav-icon">{icon}</span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </aside>

      {/* ── Mobile Header ── */}
      <header className="mobile-header">
        <span className="mobile-logo">Tinbite</span>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <button
            onClick={toggleTheme}
            className="hamburger-btn"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="hamburger-btn"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Dropdown Nav ── */}
      <nav className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            onClick={closeMobile}
            className={({ isActive }) =>
              `nav-item-mobile ${isActive ? "active" : ""}`
            }
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.7rem 1rem",
              borderRadius: "6px",
              fontWeight: 500,
              color: isActive ? "var(--accent)" : "var(--text-secondary)",
              backgroundColor: isActive ? "var(--bg-card)" : "transparent",
              transition: "all 0.2s ease",
            })}
          >
            <span>{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
