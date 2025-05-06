// components/Banner.js
import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5709664/pexels-photo-5709664.jpeg')",
      }}
    >
      <div className="bg-black/50 p-8 rounded-2xl text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Louez votre moto dès aujourd'hui
        </h2>
        <p className="text-lg md:text-xl">
          Disponible 24h/24 – Service rapide et fiable
        </p>
      </div>
    </div>
  );
};

export default Banner;
