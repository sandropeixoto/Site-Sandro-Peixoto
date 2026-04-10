import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnter = () => setCursorVariant("pointer");
    const mouseLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);
    
    const interactiveElements = document.querySelectorAll('a, button, .neo-brutalist-card');
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      backgroundColor: "#000000",
    },
    pointer: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "#F3F415",
      mixBlendMode: "difference"
    }
  };

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] border-2 border-black"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
