import React from 'react';
import { useState } from 'react';

const faqData = [
  {
    question: "Quels types de véhicules proposez-vous à la location ?",
    answer: "Nous proposons des voitures, des motos et des véhicules utilitaires selon vos besoins.",
  },
  {
    question: "Quels documents dois-je fournir pour louer un véhicule ?",
    answer: "Une pièce d'identité valide et un permis de conduire en cours de validité sont requis.",
  },
  {
    question: "Puis-je réserver un véhicule à l’avance ?",
    answer: "Oui, vous pouvez effectuer une réservation via notre formulaire de contact.",
  },
  {
    question: "Les véhicules sont-ils assurés ?",
    answer: "Oui, tous nos véhicules sont couverts par une assurance pendant la période de location.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-white" id="faq">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">Foire Aux Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded p-4 cursor-pointer transition-all"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <span className="text-blue-600">{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
