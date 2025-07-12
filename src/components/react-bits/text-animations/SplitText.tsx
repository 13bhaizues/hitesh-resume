import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({ 
  children, 
  className = '',
  delay = 0,
  stagger = 0.05
}) => {
  const words = children.split(' ');

  return (
    <div className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ 
                opacity: 0, 
                y: 50,
                rotateX: -90
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0
              }}
              transition={{
                duration: 0.6,
                delay: delay + (wordIndex * word.length + charIndex) * stagger,
                ease: "easeOut"
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};