import React from 'react';
import { motion } from 'framer-motion';

interface FluidGlassProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'minimal';
}

export const FluidGlass: React.FC<FluidGlassProps> = ({ 
  children, 
  className = '',
  variant = 'default'
}) => {
  const variantStyles = {
    default: 'backdrop-blur-xl bg-white/10 border border-white/20',
    elevated: 'backdrop-blur-2xl bg-white/15 border border-white/30 shadow-2xl',
    minimal: 'backdrop-blur-lg bg-white/5 border border-white/10'
  };

  return (
    <motion.div
      className={`
        relative rounded-3xl overflow-hidden
        ${variantStyles[variant]} ${className}
      `}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut" 
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="fluidPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <motion.circle
                cx="20"
                cy="20"
                r="1"
                fill="currentColor"
                className="text-violet-400"
                animate={{
                  r: [1, 2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fluidPattern)" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {children}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      
      {/* Border highlight */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-blue-500/20 p-[1px]">
        <div className="w-full h-full rounded-3xl bg-transparent" />
      </div>
    </motion.div>
  );
};