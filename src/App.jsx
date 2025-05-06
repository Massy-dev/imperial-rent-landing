import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer.js';
import FAQ from './components/FAQ.js';
import { pageView } from './analytics';
import Pricing from './components/Pricing';
import FooterBannerParallax from './components/FooterBannerParalax.js';
import Testimonials from './components/Testimonials';

 


function App() {

  useEffect(() => {
    pageView(); 
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    
    <div className="App">
     
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contacts/>
    </div>
  );
}

export default App;
