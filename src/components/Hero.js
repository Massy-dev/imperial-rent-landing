// src/components/Hero.jsx

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-black text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/voiture.jpg')" }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Content */}
      <motion.div 
        style={{ position: 'relative', zIndex: 20, textAlign: 'center', maxWidth: '48rem' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Bienvenue chez <span className="text-[#ffa500]">IMPERIAL RENT</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Louez l'excellence, roulez en confiance.
        </p>
        <button
        
        className="bg-[#ffa500] text-black font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        
        >
          Réserver maintenant
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
