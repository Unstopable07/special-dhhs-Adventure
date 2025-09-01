import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <a
                href="mailto:dhhsupport@gmail.com.com?subject=Loan%20Inquiry&body=Hello%20DHHS%2C%20I%20need%20assistance%20with..."
                className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors inline-block text-center"
              >
                Send Message
              </a>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
