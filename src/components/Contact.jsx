import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTelegram } from 'react-icons/fa';

const Contact = ({theme} ) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xovaodnn', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrorMessage('');
    } else {
      setErrorMessage('Submission failed. Please try again later.');
    }
  };

  return (
    <div className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} contact-page  min-h-screen flex flex-col items-center p-5 md:p-10`}>
      <div className="slide">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-center">Let's Connect!</h1>
      <p className="text-lg mb-12 text-center max-w-md">
        I'm always excited to discuss new projects or opportunities. Feel free to reach out through any of the channels below or use the contact form.
      </p>
      </div>
      <div className={`contact-form rounded-lg shadow-lg w-full max-w-3xl ${isVisible ? 'slide-in' : ''}`}>
        {formSubmitted ? (
          <div className="text-center bg-orange-200 py-4 rounded-lg text-black">
            <h2 className="text-3xl mb-4 ">Thank you for reaching out!</h2>
            <p className="text-lg">I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 p-5">
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            <div className="flex flex-col md:flex-row space-x-4"> 
              <div className="flex-1">
                <label className="text-lg font-semibold">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="ml-5 p-3 rounded-full border border-gray-700 focus:ring-2 focus:ring-blue-500 w-full" 
                  required
                />
              </div>
              <div className="flex-1">
                <label className="text-lg font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="p-3 rounded-full border border-gray-700 focus:ring-2 focus:ring-blue-500 w-full" 
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="p-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-500 text-white p-3 rounded-xl text-lg hover:bg-gray-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <div className="flex flex-wrap justify-center mt-10 space-x-6 space-y-4 md:space-y-0">
        <a href="https://www.linkedin.com/in/tinbite-elias" target="_blank" rel="noopener noreferrer" className="text-3xl mt-4 md:text-4xl md:mt-0 hover:text-blue-500 transition duration-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Tinbit25" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl hover:text-gray-500 transition duration-300">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/tinbite_elias" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl hover:text-pink-300 transition duration-300">
          <FaInstagram />
        </a>
        <a href="https://t.me/MTinasT" className="text-3xl md:text-4xl hover:text-blue-500 transition duration-300">
          <FaTelegram />
        </a>
      </div>
    </div>
  );
};

export default Contact;