import React from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-4 md:px-10 bg-brutalist-yellow text-black border-t-3 border-black">
      <div className="flex flex-col md:flex-row justify-between gap-16">
        <div className="max-w-xl">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            VAMOS <br /> CONVERSAR?
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-10 leading-snug">
            Transforme seu próximo projeto com a experiência de quem entende de tecnologia e estratégia.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:contato@sandropeixoto.com.br" className="flex items-center gap-4 group">
              <div className="neo-brutalist-card bg-white p-2 group-hover:bg-brutalist-pink transition-colors">
                <Mail size={24} />
              </div>
              <span className="text-xl font-black uppercase underline decoration-4">contato@sandropeixoto.com.br</span>
            </a>
            <a href="https://wa.me/5591991909662" className="flex items-center gap-4 group">
              <div className="neo-brutalist-card bg-white p-2 group-hover:bg-brutalist-cyan transition-colors">
                <Phone size={24} />
              </div>
              <span className="text-xl font-black uppercase underline decoration-4">+55 91 99190-9662</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-end items-start md:items-end gap-10">
          <div className="flex gap-4">
            <a href="#" className="neo-brutalist-button bg-white hover:bg-brutalist-cyan p-4">
              <Linkedin size={32} />
            </a>
            <a href="#" className="neo-brutalist-button bg-white hover:bg-brutalist-pink p-4">
              <Instagram size={32} />
            </a>
          </div>
          <div className="neo-brutalist-card bg-brutalist-black text-white p-4 text-sm font-bold uppercase tracking-tighter">
            © {new Date().getFullYear()} SANDRO PEIXOTO. <br /> TODOS OS DIREITOS RESERVADOS.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
