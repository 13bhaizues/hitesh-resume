import React from 'react';
import { motion } from 'framer-motion';

interface ShapeBlurProps {
  className?: string;
  variant?: 'wave' | 'geometric' | 'organic';
}

export const ShapeBlur: React.FC<ShapeBlurProps> = ({ 
  className = '', 
  variant = 'wave' 
}) => {
  if (variant === 'wave') {
    return (
      <div className={`relative w-full h-32 overflow-hidden ${className}`}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            animate={{
              d: [
                "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z",
                "M0,40 C300,0 900,120 1200,40 L1200,120 L0,120 Z",
                "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.15)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === 'geometric') {
    return (
      <div className={`relative w-full h-24 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-16 h-16 mx-4"
              style={{
                background: `linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(168, 85, 247, 0.1))`,
                filter: 'blur(8px)',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Organic variant
  return (
    <div className={`relative w-full h-20 overflow-hidden ${className}`}>
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${120 + i * 40}px`,
            height: `${60 + i * 20}px`,
            left: `${20 + i * 30}%`,
            top: '50%',
            background: `radial-gradient(ellipse, rgba(${i === 0 ? '139, 92, 246' : i === 1 ? '168, 85, 247' : '59, 130, 246'}, 0.15) 0%, transparent 70%)`,
            filter: 'blur(20px)',
            transform: 'translateY(-50%)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};