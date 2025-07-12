import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hero' | 'compact';
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ 
  children, 
  className = '',
  variant = 'default'
}) => {
  const variantStyles = {
    default: 'p-8 rounded-3xl',
    hero: 'p-12 rounded-3xl',
    compact: 'p-6 rounded-2xl'
  };

  return (
    <motion.div
      className={`
        relative backdrop-blur-xl bg-white/10 border border-white/20 
        shadow-2xl ${variantStyles[variant]} ${className}
      `}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-blue-500/20 p-[1px]">
        <div className="w-full h-full rounded-inherit bg-black/20 backdrop-blur-xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
};