import React from 'react';
import { motion } from 'framer-motion';

interface BlurTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const BlurText: React.FC<BlurTextProps> = ({ 
  children, 
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      className={className}
      initial={{ 
        filter: 'blur(10px)', 
        opacity: 0,
        y: 20
      }}
      animate={{ 
        filter: 'blur(0px)', 
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};