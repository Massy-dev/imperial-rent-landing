import React from 'react';

function Hero() {
  return (
    <section
      className="bg-cover bg-center py-16 px-6 text-center text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
      }}
      id="hero"
     
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Louez facilement votre véhicule avec Imperial Rent
        </h2>
        <p className="text-gray-200 text-base sm:text-lg mb-6">
          Voitures, motos, utilitaires — disponibles en quelques clics. Réservez dès maintenant et roulez en toute sérénité.
        </p>
        <a href="#contact">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Réserver un véhicule
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
