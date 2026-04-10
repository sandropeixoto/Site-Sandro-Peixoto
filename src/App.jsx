import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-brutalist-white font-['Space_Grotesk'] overflow-x-hidden md:cursor-none">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
