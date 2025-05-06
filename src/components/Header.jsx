// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import react-scroll Link
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  // Changer la couleur du background au scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("#000000");
    } else {
      setBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        bgColor === "#000000" ? "bg-[#1b1b1b] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/rent.png" alt="IMPERIAL RENT Logo" className="h-20 mb-2 mx-auto md:mx-0" />
          <div className="text-[#ffa500] font-semibold text-1xl">IMPERIAL RENT</div>
         
        </div>
        

        {/* Menu */}
        <ul className={`flex gap-8 ${isMobile ? "flex-col" : "hidden md:flex"}`}>
        <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-[#ffa500]"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-[#ffa500]"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-[#ffa500]"
            >
              Nos Services
            </Link>
          </li>
          
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-[#ffa500]"
            >
              Réserver
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-white"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
