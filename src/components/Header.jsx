// src/components/Navbar.jsx

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Gérer le scroll pour changer la couleur de fond
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1b1b1b] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#ffa500] font-bold text-xl">IMPERIAL RENT</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white">
          <li><a href="#hero" className="hover:text-[#ffa500]">Accueil</a></li>
          <li><a href="#about" className="hover:text-[#ffa500]">À propos</a></li>
          <li><a href="#services" className="hover:text-[#ffa500]">Services</a></li>
          <li><a href="#contact" className="hover:text-[#ffa500]">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
