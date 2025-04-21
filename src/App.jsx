import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Contact from './components/Contacts.js';
import Footer from './components/Footer.js';
import FAQ from './components/FAQ.js';
import { pageView } from './analytics';


 


function App() {

  useEffect(() => {
    pageView(); 
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    
    <div className="App">
     
      <Header/> 
      <Hero/>
      <About />
      <Services/>
      <Contact />
      <Footer />
      <FAQ />
    </div>
  );
}

export default App;
