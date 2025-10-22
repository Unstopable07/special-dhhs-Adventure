import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // To show success message

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_lzbf5qd", // Your EmailJS Service ID
        "template_ptrqkvt", // Your EmailJS Template ID
        formData, // Form data containing name, email, message
        "dWWiwE_tq20guofrb" // Your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Success:", response);
          setIsLoading(false);
          setIsSuccess(true);
          setFormData({ name: "", email: "", message: "", Address: "" }); // Reset form
        },
        (error) => {
          console.log("Error:", error);
          setIsLoading(false);
          setIsSuccess(false);
        }
      );
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-blue-200 relative">
        {/* Logo */}
        <img
          src="Images/seal dhhs.svg"
          alt="DHHS Logo"
          className="h-[70px] lg:h-[100px]"
        />

        {/* Title */}
        <h1 className="text-xl lg:text-3xl font-bold text-blue-900">
          Department Of Human Health Services
        </h1>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            onClick={openModal}
            className="bg-white text-blue-900 font-medium rounded-xl px-4 py-2 hover:bg-blue-900 hover:text-white transition-colors duration-500"
          >
            Speak to an Agent
          </button>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <FaTimes
              className="text-3xl text-blue-900 cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="text-3xl text-blue-900 cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-4 md:hidden">
            <button
              onClick={openModal}
              className="bg-blue-900 text-white rounded-xl px-4 py-2 hover:bg-blue-700"
            >
              Speak to an Agent
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-bold text-blue-900 mb-4">
              Speak to an Agent
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input type="Number" 
              placeholder="Phone Number"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Number"
                value={formData.Number}
                onChange={handleChange}
                required
              />
              <textarea
                placeholder="Your Address"
                rows="2"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                required
              ></textarea>
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors inline-block text-center"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
              {isSuccess && !isLoading && (
                <div className="mt-2 text-green-500">Message sent successfully!</div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
