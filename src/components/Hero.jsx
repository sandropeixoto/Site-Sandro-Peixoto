import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-10 pt-24 pb-10 bg-brutalist-white overflow-hidden">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="neo-brutalist-card bg-brutalist-cyan py-1 px-3 text-sm font-bold uppercase tracking-widest inline-block">
            Sandro Peixoto — Arquiteto de Software & Consultor
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.9] tracking-tighter mb-8 break-words"
        >
          TRANSFORMANDO <br />
          <span className="text-brutalist-pink outline-text">DESAFIOS</span> <br />
          EM SOLUÇÕES <br />
          <span className="bg-brutalist-yellow px-4 border-3 border-black shadow-hard inline-block mt-2">ESTRATÉGICAS</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl flex flex-col md:flex-row gap-8 items-start md:items-center"
        >
          <p className="text-xl md:text-2xl font-medium leading-tight">
            Mais de 30 anos unindo visão tecnológica e liderança eficiente para impulsionar o seu negócio.
          </p>
          <a href="#contact" className="neo-brutalist-button bg-brutalist-black text-white hover:bg-brutalist-cyan hover:text-black flex items-center gap-2 text-lg whitespace-nowrap">
            Falar comigo <ArrowDownRight size={24} />
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 md:w-64 md:h-64 border-3 border-black rounded-full bg-brutalist-cyan -z-0 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-48 h-12 border-3 border-black bg-brutalist-pink -z-0 rotate-12"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-48 border-3 border-black bg-brutalist-yellow -z-0 -rotate-45 opacity-30"></div>
    </section>
  );
};

export default Hero;
