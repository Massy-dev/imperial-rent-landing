// src/components/Services.jsx

import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

// Exemple de services
const services = [
  {
    title: "Location de voiture",
    description: "Louez des véhicules de luxe ou économique selon vos besoins.",
    icon: "🚗",
  },
  {
    title: "Location de voiture avec chauffeur",
    description: "Profitez d'un chauffeur professionnel pour vos trajets.",
    icon: "👨‍✈️",
  },
  {
    title: "Location longue durée",
    description: "Pour les locations à long terme avec des tarifs préférentiels.",
    icon: "📅",
  },
  {
    title: "Assistance 24/7",
    description: "Un service d'assistance disponible en tout temps.",
    icon: "🛠️",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 text-white px-6 bg-[#1b1b1b] relative"
      
    >
       <div className="absolute inset-0 z-10 bg-cover bg-center" 
          style={{ backgroundImage: 'url("/images/CAR1.jpg")' ,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            opacity: 0.2,
          }} />
     
      {/* Contenu de la section */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nos Services
        </motion.h2>
        <p className="text-lg mb-12">
          Chez **IMPERIAL RENT**, nous proposons une gamme de services pour
          répondre à toutes vos attentes.
        </p>

        {/* Grid des services */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-[#0a0a23] p-10 rounded-lg shadow-lg hover:shadow-[#ffa500] items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
