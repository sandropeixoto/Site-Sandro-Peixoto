import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brutalist-white font-['Space_Grotesk']">
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
