import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "A visão estratégica de TI do Sandro foi fundamental para escalarmos nossa infraestrutura de forma segura e eficiente.",
      author: "DIRETOR DE TI",
      context: "Projeto Corporativo"
    },
    {
      text: "O Voto Solutions revolucionou a forma como gerimos nossas campanhas. Controle total e estratégia baseada em dados reais.",
      author: "COORDENADOR POLÍTICO",
      context: "Gestão Eleitoral"
    },
    {
      text: "Implementar o Portal da Transparência com a expertise do Sandro garantiu conformidade total e agilidade no acesso público.",
      author: "GESTOR PÚBLICO",
      context: "Setor Governamental"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-10 bg-brutalist-white border-y-3 border-black">
      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-center">
        PROVA <span className="bg-brutalist-cyan px-2 border-3 border-black shadow-hard">REAL</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="neo-brutalist-card bg-white flex flex-col">
            <Quote className="text-brutalist-pink mb-6" size={48} />
            <p className="text-lg font-bold mb-8 flex-grow leading-tight">"{t.text}"</p>
            <div className="mt-auto pt-6 border-t-3 border-black flex flex-col">
              <span className="font-black uppercase tracking-tighter text-xl">{t.author}</span>
              <span className="text-sm font-bold uppercase opacity-60">{t.context}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
