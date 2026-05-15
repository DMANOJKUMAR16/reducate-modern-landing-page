"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          Reducate
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-black transition cursor-pointer">Home</li>
          <li className="hover:text-black transition cursor-pointer">About</li>
          <li className="hover:text-black transition cursor-pointer">Programs</li>
          <li className="hover:text-black transition cursor-pointer">Testimonials</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 hover:scale-105 transition">          Apply Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6">
          <ul className="flex flex-col gap-6 text-gray-700 font-medium">
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Testimonials</li>
          </ul>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-full">
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;