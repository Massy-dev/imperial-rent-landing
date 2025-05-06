// components/Pricing.js
import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Forfait Éco",
    price: "3 000 F CFA",
    features: ["Assurance incluse", "1 casque fourni", "Assistance 24h/24"],
  },
  {
    title: "Forfait Confort",
    price: "4 500 F CFA",
    features: ["Assurance + Vol", "2 casques fournis", "Assistance rapide"],
  },
  {
    title: "Forfait Premium",
    price: "6 000 F CFA",
    features: ["Tous services inclus", "Casque + Gants", "Livraison moto sur demande"],
  },
];

const Pricing = () => {
  return (
    <section id="prix" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Nos Tarifs par jour</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-2xl font-bold text-indigo-600 mb-4">{plan.price}</p>
              <ul className="text-gray-600 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
