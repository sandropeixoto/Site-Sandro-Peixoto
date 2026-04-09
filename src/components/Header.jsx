import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-center pointer-events-none">
      <div className="neo-brutalist-card bg-brutalist-yellow py-2 px-4 pointer-events-auto">
        <h1 className="font-bold text-xl uppercase tracking-tighter">Sandro Peixoto</h1>
      </div>
      
      <nav className="hidden md:flex gap-4 pointer-events-auto">
        <a href="#services" className="neo-brutalist-button bg-white hover:bg-brutalist-cyan">Serviços</a>
        <a href="#about" className="neo-brutalist-button bg-white hover:bg-brutalist-pink">Sobre</a>
        <a href="#contact" className="neo-brutalist-button bg-brutalist-black text-white hover:bg-brutalist-yellow hover:text-black">Contato</a>
      </nav>
      
      <div className="md:hidden pointer-events-auto">
        <button className="neo-brutalist-button bg-white">Menu</button>
      </div>
    </header>
  );
};

export default Header;
