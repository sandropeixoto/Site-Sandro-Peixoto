import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10 bg-white overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="neo-brutalist-card bg-brutalist-pink z-10 relative">
            <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter">
              VISÃO E <br /> LIDERANÇA
            </h3>
            <p className="text-xl font-medium mb-6">
              Com mais de 30 anos de atuação, Sandro Peixoto é referência na coordenação de equipes multidisciplinares e gestão estratégica de TI.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white px-2 font-bold">01</span>
                <p className="font-bold">Estratégia de Software & Arquitetura</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-black text-white px-2 font-bold">02</span>
                <p className="font-bold">Coordenação de Projetos Complexos</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-black text-white px-2 font-bold">03</span>
                <p className="font-bold">Consultoria Tecnológica de Alto Nível</p>
              </div>
            </div>
          </div>
          {/* Backdrop decorative box */}
          <div className="absolute -top-6 -left-6 w-full h-full border-3 border-black bg-brutalist-cyan -z-0"></div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            EXPERIÊNCIA <br /> 
            <span className="text-brutalist-cyan outline-text-black">QUE FAZ A</span> <br /> 
            DIFERENÇA.
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-10 leading-snug">
            Unindo as melhores tecnologias (IA, Cloud, Dev Ops) com uma visão de negócio focada em resultados reais e escaláveis.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="neo-brutalist-card bg-brutalist-yellow py-2 px-6">
              <span className="text-4xl font-black tracking-tighter">30+</span>
              <p className="text-sm font-bold uppercase">Anos no mercado</p>
            </div>
            <div className="neo-brutalist-card bg-white py-2 px-6 border-brutalist-black">
              <span className="text-4xl font-black tracking-tighter">100+</span>
              <p className="text-sm font-bold uppercase">Projetos Entregues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
