import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  children, 
  className = '',
  delay = 0
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDecrypting(true);
      let iteration = 0;
      
      const interval = setInterval(() => {
        setDisplayText(
          children
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return char;
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );
        
        if (iteration >= children.length) {
          clearInterval(interval);
          setIsDecrypting(false);
        }
        
        iteration += 1 / 3;
      }, 30);
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [children, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {displayText || children}
    </motion.span>
  );
};