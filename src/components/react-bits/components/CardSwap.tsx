import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardSwapProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export const CardSwap: React.FC<CardSwapProps> = ({ 
  front, 
  back, 
  className = '' 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`relative perspective-1000 ${className}`}>
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            className="w-full cursor-pointer"
            onClick={() => setIsFlipped(true)}
            initial={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.3 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              {front}
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-400">Click to flip</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            className="w-full cursor-pointer"
            onClick={() => setIsFlipped(false)}
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              {back}
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-400">Click to flip back</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};