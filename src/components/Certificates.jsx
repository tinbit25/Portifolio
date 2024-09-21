import React, { useEffect } from "react";
import certificate1 from "../assets/images/52-professional-foundations-certificate-tinbite-elias.png";
import certificate2 from "../assets/images/Learn the Latest Tech Skills; Advance Your Career _ Udacity-images-0.jpg"; // Add more certificate images
import certificate3 from "../assets/images/R5iK7HMxJGBgaSbvk_J.P. Morgan_qS9sgsKmRuaLb8t42_1725272498297_completion_certificate (1).jpg";


const Certificates = () => {
  useEffect(() => {
    const certificates = document.querySelectorAll('.certificate');
    certificates.forEach((certificate, index) => {
      setTimeout(() => {
        certificate.classList.add('show');
      }, Math.floor(index / 2) * 600 + (index % 2) * 300); // Delay each pair's animation by 600ms, stagger within the pair by 300ms
    });
  }, []);

  // Array to store the certificate image paths
  const certificateImages = [certificate1, certificate2, certificate3];

  return (
    <div className="bg-gray-900 text-white">
      <div className="content p-8 ">
        <h1 className="text-4xl font-bold mb-5">Certificates</h1>
        <p className="text-lg mb-5">Browse through my professional certifications below.</p>

        {/* Certificates Grid */}
        <div className="grid-container">
          {certificateImages.map((image, index) => (
            <div className="certificate" key={index}>
              <img
                src={image}
                alt={`Certificate ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
