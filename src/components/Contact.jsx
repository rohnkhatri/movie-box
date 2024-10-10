import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
  
      <div className="flex justify-center items-center h-[100vh] w-[100vw] bg-[#1F1E24] text-white">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-8 bg-[#28272e] rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Contact Us
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-[#6556CD] hover:bg-[#6556CD] text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6556CD]"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
  );
};

export default ContactForm;
