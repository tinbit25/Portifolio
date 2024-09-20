import React, { useEffect } from "react";

const Certificates = () => {
  useEffect(() => {
    const certificates = document.querySelectorAll('.certificate');
    certificates.forEach((certificate, index) => {
      setTimeout(() => {
        certificate.classList.add('show');
      }, Math.floor(index / 2) * 600 + (index % 2) * 300); // Delay each pair's animation by 600ms, stagger within the pair by 300ms
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div className="content p-8 ml-24">
        <h1 className="text-4xl font-bold mb-5">Certificates</h1>
        <p className="text-lg mb-5">Browse through my professional certifications below.</p>

        {/* Single Certificates Grid */}
        <div className="grid-container">
          {Array.from({ length: 4 }).map((_, index) => ( // Adjust the total number of certificates here
            <div className="certificate" key={index}>
              <img
                src="https://via.placeholder.com/450x250"
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