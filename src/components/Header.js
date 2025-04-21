import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-2 sm:mb-0">Imperial Rent</h1>
      <nav className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
        <a href="#about" className="text-gray-600 hover:text-blue-600">À propos</a>
        <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
