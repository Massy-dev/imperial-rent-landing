import React from 'react';

function Hero() {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <h2 className="text-4xl font-bold">Louez votre véhicule en toute simplicité</h2>
      <p className="mt-4 text-lg">Voitures, motos et camions disponibles 24h/24</p>
      <button className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100">
        Réserver maintenant
      </button>
    </section>
  );
}

export default Hero;
