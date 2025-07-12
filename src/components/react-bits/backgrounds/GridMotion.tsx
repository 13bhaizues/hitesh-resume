import React from 'react';
import { motion } from 'framer-motion';

interface GridMotionProps {
  className?: string;
}

export const GridMotion: React.FC<GridMotionProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-slate-400"
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </pattern>
          <pattern id="dots" width="100" height="100" patternUnits="userSpaceOnUse">
            <motion.circle
              cx="50"
              cy="50"
              r="1"
              fill="currentColor"
              className="text-violet-400"
              animate={{
                r: [1, 2, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
        
        {/* Animated grid lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.line
            key={`vertical-${i}`}
            x1={i * 125}
            y1="0"
            x2={i * 125}
            y2="1000"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-blue-400"
            strokeOpacity="0.2"
            animate={{
              strokeOpacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.line
            key={`horizontal-${i}`}
            x1="0"
            y1={i * 125}
            x2="1000"
            y2={i * 125}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-purple-400"
            strokeOpacity="0.2"
            animate={{
              strokeOpacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};