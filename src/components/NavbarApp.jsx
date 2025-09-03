import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // for menu icons

export default function NavbarApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">E-Gram Panchayat</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4">
          <a
            href="#home"
            className="hover:bg-amber-300 hover:text-black p-2 rounded"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:bg-amber-300 hover:text-black p-2 rounded"
          >
            Services
          </a>
          <a
            href="#notices"
            className="hover:bg-amber-300 hover:text-black p-2 rounded"
          >
            Notices
          </a>
          <a
            href="#contact"
            className="hover:bg-amber-300 hover:text-black p-2 rounded"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-2 mt-4 bg-green-700 p-4 rounded-lg">
          <a
            href="#home"
            className="hover:bg-amber-300 hover:text-black p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:bg-amber-300 hover:text-black p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#notices"
            className="hover:bg-amber-300 hover:text-black p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Notices
          </a>
          <a
            href="#contact"
            className="hover:bg-amber-300 hover:text-black p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
