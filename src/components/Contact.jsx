import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      console.error('Submission failed');
    }
  };

  return (
    <div className="contact-page bg-gray-900 min-h-screen text-white flex flex-col items-center p-5 md:p-10">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Let's Connect!</h1>
      <p className="text-lg mb-12 text-center max-w-md">
        I'm always excited to discuss new projects or opportunities. Feel free to reach out through any of the channels below or use the contact form.
      </p>

      {/* Contact Form */}
      <div className={`contact-form bg-orange-200 text-gray-800 p-6 rounded-lg shadow-lg w-full max-w-xl`}>
        {formSubmitted ? (
          <div className="text-center">
            <h2 className="text-3xl mb-4">Thank you for reaching out!</h2>
            <p className="text-lg">I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md text-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Social Media Links */}
      <div className="flex flex-wrap justify-center mt-10 space-x-6 space-y-4 md:space-y-0">
        <a href="https://www.linkedin.com/in/tinbite-elias" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl hover:text-blue-500 transition duration-300">
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
