import React, { useEffect } from "react";
import certificate1 from "../assets/images/www.freecodecamp.org_certification_fcc5dab13ae-6ad2-4b4b-88ad-f617daa98a2a_back-end-development-and-apis.png";

import certificate3 from "../assets/images/52-professional-foundations-certificate-tinbite-elias.png";
import certificate4 from "../assets/images/Learn the Latest Tech Skills; Advance Your Career _ Udacity-images-0.jpg"; 
import certificate2 from "../assets/images/R5iK7HMxJGBgaSbvk_J.P. Morgan_qS9sgsKmRuaLb8t42_1725272498297_completion_certificate (1).jpg";


const Certificates = ({theme}) => {
  useEffect(() => {
    const certificates = document.querySelectorAll('.certificate');
    certificates.forEach((certificate, index) => {
      setTimeout(() => {
        certificate.classList.add('show');
      }, Math.floor(index / 2) * 600 + (index % 2) * 300); // Delay each pair's animation by 600ms, stagger within the pair by 300ms
    });
  }, []);

  
  const certificateImages = [certificate1, certificate2, certificate3,certificate4];

  return (
    <div className={`${theme === 'light' ? 'text-gray-800' : 'text-white'}  certificate-container `}>
      <div className="content p-8  ">
        <h1 className="text-4xl font-bold mb-5 ">Certificates</h1>
        


        <div className="grid-container ">
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
