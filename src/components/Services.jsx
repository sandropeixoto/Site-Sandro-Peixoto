import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Vote, Code } from 'lucide-react';

const services = [
  {
    title: "Sites Institucionais",
    desc: "Sites focados em conversão, SEO de alta performance e design que transmite autoridade.",
    icon: <Globe size={32} />,
    color: "bg-brutalist-cyan"
  },
  {
    title: "Portais Governamentais",
    desc: "Soluções completas para Prefeituras e Câmaras, integrando Portal da Transparência e legislação.",
    icon: <ShieldCheck size={32} />,
    color: "bg-brutalist-yellow"
  },
  {
    title: "Gestão Política",
    desc: "Voto Solutions: Estratégia e controle total para campanhas e mandatos de sucesso.",
    icon: <Vote size={32} />,
    color: "bg-brutalist-pink"
  },
  {
    title: "Software Customizado",
    desc: "Arquitetura e desenvolvimento de soluções sob medida com foco em performance e escala.",
    icon: <Code size={32} />,
    color: "bg-white"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-10 bg-brutalist-black text-white">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-brutalist-cyan">
          NOSSOS PILARES
        </h2>
        <div className="w-48 h-4 bg-brutalist-pink mb-10"></div>
        <p className="text-xl md:text-2xl max-w-2xl font-medium text-gray-300">
          Oferecemos soluções integradas que unem tecnologia de ponta com visão estratégica de mercado.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className={`neo-brutalist-card ${service.color} text-black h-full flex flex-col`}
          >
            <div className="mb-6 p-4 border-3 border-black bg-white inline-block w-fit shadow-hard">
              {service.icon}
            </div>
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">
              {service.title}
            </h3>
            <p className="font-medium mb-8 flex-grow">
              {service.desc}
            </p>
            <button className="neo-brutalist-button bg-brutalist-black text-white w-full uppercase">
              Saiba Mais
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
