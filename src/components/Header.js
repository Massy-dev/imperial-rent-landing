import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Imperial Rent</h1>
      <nav className="space-x-4">
        <a href="#about" className="text-gray-600 hover:text-blue-600">À propos</a>
        <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
