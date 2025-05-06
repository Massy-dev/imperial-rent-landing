// src/components/Footer.jsx

import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Logo */}
        <div>
          <img src="/path-to-your-logo.png" alt="IMPERIAL RENT Logo" className="h-16 mb-4 mx-auto md:mx-0" />
          <p className="text-gray-400">Agence de location de voitures premium.</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#ffa500]">Navigation</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-[#ffa500]">À propos</a></li>
            <li><a href="#services" className="hover:text-[#ffa500]">Nos Services</a></li>
            <li><a href="#reviews" className="hover:text-[#ffa500]">Avis</a></li>
            <li><a href="#contact" className="hover:text-[#ffa500]">Réserver</a></li>
          </ul>
        </div>

        {/* Contact & Réseaux */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#ffa500]">Contact</h4>
          <p className="text-gray-300">contact@imperialrent.com</p>
          <p className="text-gray-300 mb-4">+33 6 00 00 00 00</p>
          <div className="flex justify-center md:justify-start gap-4 text-[#ffa500] text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} IMPERIAL RENT. Tous droits réservés.
      </div>
    </motion.footer>
  );
};

export default Footer;
