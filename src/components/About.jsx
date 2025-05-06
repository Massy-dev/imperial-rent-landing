// src/components/About.jsx

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-[#1b1b1b] text-white px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/team.jpg" // Change the image path as needed
            alt="Équipe IMPERIAL RENT"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <div className="w-full md:w-1/2 px-5 text-center md:text-left">
          <motion.h2
            className="text-3xl md:text-4xl  font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            À propos de nous
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Nous sommes **IMPERIAL RENT**, une agence de location de voitures premium, offrant des véhicules adaptés à toutes vos envies. Nous croyons en l’excellence et en la confiance. Que ce soit pour une location courte ou longue durée, nous mettons à votre disposition une flotte de voitures haut de gamme, parfaitement entretenues, et prêtes à rouler.
          </motion.p>
          <motion.button
            className="bg-[#ffa500] text-black font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Contactez-nous
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;
