import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TiltedCardProps {
  title: string;
  description: string;
  imgSrc?: string;
  className?: string;
  children?: React.ReactNode;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({ 
  title, 
  description, 
  imgSrc,
  className = '',
  children
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    setMousePosition({
      x: (e.clientX - centerX) / 10,
      y: (e.clientY - centerY) / 10,
    });
  };

  return (
    <motion.div
      className={`
        relative backdrop-blur-xl bg-white/10 border border-white/20 
        rounded-3xl overflow-hidden shadow-2xl cursor-pointer
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        rotateX: isHovered ? mousePosition.y * 0.5 : 0,
        rotateY: isHovered ? mousePosition.x * 0.5 : 0,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut" 
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {/* Image */}
      {imgSrc && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imgSrc} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        {children}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 pointer-events-none" />
      
      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(168, 85, 247, 0.3))',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          padding: '1px',
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};