// components/FooterBannerParallax.js
import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/image.jpg"; // Ensure this file exists in the assets folder

const FooterBannerParallax = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover flex text-white py-32 px-4 items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-10" />
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '56rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center'
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à rouler avec Imperial Rent ?</h2>
        <p className="mb-8 text-lg md:text-xl">Réservez votre moto en quelques clics et partez à l’aventure dès aujourd’hui.</p>
        <a
          href="#contact"
          className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Réserver maintenant
        </a>
      </motion.div>
    </section>
  );
};

export default FooterBannerParallax;
