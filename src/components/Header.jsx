import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-center pointer-events-none">
      <div className="neo-brutalist-card bg-brutalist-yellow py-1 px-3 md:py-2 md:px-4 pointer-events-auto">
        <h1 className="font-bold text-lg md:text-xl uppercase tracking-tighter">Sandro Peixoto</h1>
      </div>
      
      <nav className="hidden md:flex gap-4 pointer-events-auto">
        <a href="#services" className="neo-brutalist-button bg-white hover:bg-brutalist-cyan text-sm">Serviços</a>
        <a href="#about" className="neo-brutalist-button bg-white hover:bg-brutalist-pink text-sm">Sobre</a>
        <a href="#contact" className="neo-brutalist-button bg-brutalist-black text-white hover:bg-brutalist-yellow hover:text-black text-sm">Contato</a>
      </nav>
      
      <div className="md:hidden pointer-events-auto">
        <a href="#contact" className="neo-brutalist-button bg-brutalist-black text-white py-2 px-4 text-xs">CONTATO</a>
      </div>
    </header>
  );
};

export default Header;
