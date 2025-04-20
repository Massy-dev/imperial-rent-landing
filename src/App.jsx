import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Contact from './components/Contacts.js';
import Footer from './components/Footer.js';

function App() {
  return (
    
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600">Imperial Rent</h1>
      <p className="text-center text-gray-700 mt-4">Location de véhicules - Voitures, Motos, Camions</p>
      <Header/> 
      <Hero/>
      <About />
      <Services/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
