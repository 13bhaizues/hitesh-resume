import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ClickSparkProps {
  children: React.ReactNode;
  className?: string;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({ 
  children, 
  className = '' 
}) => {
  const [sparks, setSparks] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newSpark = { id: Date.now(), x, y };
    setSparks(prev => [...prev, newSpark]);
    
    // Remove spark after animation
    setTimeout(() => {
      setSparks(prev => prev.filter(spark => spark.id !== newSpark.id));
    }, 600);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {children}
      
      <AnimatePresence>
        {sparks.map((spark) => (
          <div key={spark.id} className="absolute pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                style={{
                  left: spark.x,
                  top: spark.y,
                }}
                initial={{
                  scale: 0,
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 8) * 30,
                  y: Math.sin((i * Math.PI * 2) / 8) * 30,
                  opacity: [1, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};