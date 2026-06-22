import React, { useEffect, useRef } from "react";

import cert0 from "../assets/images/alx_backend_certificate.png";
import cert1 from "../assets/images/www.freecodecamp.org_certification_fcc5dab13ae-6ad2-4b4b-88ad-f617daa98a2a_back-end-development-and-apis.png";
import cert2 from "../assets/images/R5iK7HMxJGBgaSbvk_J.P. Morgan_qS9sgsKmRuaLb8t42_1725272498297_completion_certificate (1).jpg";
import cert3 from "../assets/images/52-professional-foundations-certificate-tinbite-elias.png";
import cert4 from "../assets/images/Learn the Latest Tech Skills; Advance Your Career _ Udacity-images-0.jpg";

const certificates = [
  {
    image: cert0,
    title: "Software Engineering — Back-End Web Development",
    issuer: "ALX Software Engineering",
  },
  {
    image: cert1,
    title: "Back End Development and APIs",
    issuer: "freeCodeCamp",
  },
  {
    image: cert2,
    title: "Software Engineering Job Simulation",
    issuer: "J.P. Morgan",
  },
  {
    image: cert3,
    title: "Professional Foundations",
    issuer: "ALX Africa",
  },
  {
    image: cert4,
    title: "Tech Skills Certificate",
    issuer: "Udacity",
  },
];

const CertCard = ({ cert, index }) => {
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
    <div
      ref={cardRef}
      className="cert-card"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <img
        src={cert.image}
        alt={`${cert.title} certificate`}
        className="cert-img"
        loading="lazy"
      />
      <div className="cert-body">
        <p className="cert-title">{cert.title}</p>
        <p className="cert-issuer">{cert.issuer}</p>
      </div>
    </div>
  );
};

const Certificates = () => {
  return (
    <section className="page-section">
      <h1 className="section-title">
        My <span>Certificates</span>
      </h1>
      <div className="section-divider" />
      <p className="section-subtitle">
        Verified credentials from leading platforms and institutions.
      </p>

      <div className="cert-grid">
        {certificates.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
