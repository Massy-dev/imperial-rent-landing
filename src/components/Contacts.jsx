import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contacts = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi ici (on pourra le remplacer par EmailJS plus tard)
    setIsSubmitted(true);

    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-[#111] text-white px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffa500] mb-6">
          Réservez votre véhicule maintenant
        </h2>
        <p className="text-gray-300 mb-12">
          Remplissez le formulaire ci-dessous ou contactez-nous directement.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Nom complet" className="p-4 bg-[#111] border border-gray-700 rounded-lg text-white" required />
          <input type="email" placeholder="Adresse Email" className="p-4 bg-[#111] border border-gray-700 rounded-lg text-white" required />
          <input type="tel" placeholder="Numéro de téléphone" className="p-4 bg-[#111] border border-gray-700 rounded-lg text-white" required />
          <div className="grid grid-cols-2 gap-4">
            <input type="date" className="p-4 bg-[#111] border border-gray-700 rounded-lg text-white" required />
            <input type="date" className="p-4 bg-[#111] border border-gray-700 rounded-lg text-white" required />
          </div>
          <textarea rows="4" placeholder="Message ou demande spécifique" className="md:col-span-2 p-4 bg-[#111] border border-gray-700 rounded-lg text-white"></textarea>
          <button type="submit" className="md:col-span-2 bg-[#ffa500] hover:bg-orange-500 text-black font-semibold py-3 rounded-lg transition duration-300">
            Envoyer ma demande
          </button>
        </form>

        {/* Confirmation animée */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-green-600 text-white p-4 rounded-lg shadow-lg"
            >
              ✅ Merci pour votre demande, nous vous répondrons rapidement !
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Contacts;
