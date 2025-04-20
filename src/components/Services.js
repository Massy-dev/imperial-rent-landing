import React from 'react';


function Services() {
  const services = [
    { title: "Voitures", description: "Location de voitures économiques et confortables." },
    { title: "Motos", description: "Location de motos pratiques pour vos trajets rapides." },
    { title: "Camions", description: "Camions pour déménagements et transport professionnel." },
  ];

  return (
    <section id="services" className="p-8 text-center">
      <h3 className="text-2xl font-bold text-blue-600 mb-6">Nos Services</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
