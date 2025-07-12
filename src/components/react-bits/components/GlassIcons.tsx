import React from 'react';
import { motion } from 'framer-motion';

interface GlassIconsProps {
  icons: Array<{
    id: string | number;
    icon: React.ReactNode;
    label: string;
    color?: string;
  }>;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const GlassIcons: React.FC<GlassIconsProps> = ({ 
  icons, 
  className = '',
  size = 'md'
}) => {
  const sizeStyles = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-16 h-16 text-base',
    lg: 'w-20 h-20 text-lg'
  };

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {icons.map((item, index) => (
        <motion.div
          key={item.id}
          className={`
            relative backdrop-blur-xl bg-white/10 border border-white/20 
            rounded-2xl ${sizeStyles[size]} flex items-center justify-center
            cursor-pointer group overflow-hidden
          `}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
          whileHover={{ 
            scale: 1.1, 
            y: -5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Icon */}
          <div 
            className="relative z-10 transition-colors duration-300"
            style={{ color: item.color || '#a78bfa' }}
          >
            {item.icon}
          </div>
          
          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle, ${item.color || '#a78bfa'}20 0%, transparent 70%)`,
            }}
          />
          
          {/* Border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${item.color || '#a78bfa'}40, transparent)`,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              padding: '1px',
            }}
          />
          
          {/* Tooltip */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {item.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};