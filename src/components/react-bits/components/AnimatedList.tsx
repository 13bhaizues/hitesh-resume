import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedListProps {
  items: Array<{ id: string | number; content: React.ReactNode }>;
  variant?: 'fade-up' | 'slide-left' | 'scale';
  className?: string;
  stagger?: number;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({ 
  items, 
  variant = 'fade-up',
  className = '',
  stagger = 0.1
}) => {
  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    'slide-left': {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 }
    },
    'scale': {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          variants={variants[variant]}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * stagger
          }}
        >
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  );
};