import React from 'react';

const TrustedBy = () => {
  const items = [
    "VOTO SOLUTIONS", "GOVERNO DIGITAL", "ARQUITETURA DE SOFTWARE", 
    "CONSULTORIA ESTRATÉGICA", "30+ ANOS DE EXPERIÊNCIA", "LIDERANÇA TI",
    "VOTO SOLUTIONS", "GOVERNO DIGITAL", "ARQUITETURA DE SOFTWARE"
  ];

  return (
    <div className="bg-brutalist-black py-4 border-y-3 border-black overflow-hidden whitespace-nowrap relative">
      <div className="flex animate-marquee">
        <div className="flex gap-10 items-center px-4">
          {items.map((item, idx) => (
            <span key={idx} className="text-brutalist-yellow text-2xl font-black uppercase tracking-tighter">
              {item} <span className="ml-10 text-brutalist-pink">★</span>
            </span>
          ))}
        </div>
        <div className="flex gap-10 items-center px-4" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`clone-${idx}`} className="text-brutalist-yellow text-2xl font-black uppercase tracking-tighter">
              {item} <span className="ml-10 text-brutalist-pink">★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
