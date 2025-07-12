import React from 'react';
import { motion } from 'framer-motion';

interface ShinyTextProps {
  children: React.ReactNode;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({ 
  children, 
  speed = 'medium', 
  className = '' 
}) => {
  const speedMap = {
    slow: 4,
    medium: 2.5,
    fast: 1.5
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      style={{
        background: 'linear-gradient(90deg, #64748b 0%, #e2e8f0 25%, #ffffff 50%, #e2e8f0 75%, #64748b 100%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent'
      }}
      animate={{
        backgroundPosition: ['0% 50%', '200% 50%', '0% 50%']
      }}
      transition={{
        duration: speedMap[speed],
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.div>
  );
};