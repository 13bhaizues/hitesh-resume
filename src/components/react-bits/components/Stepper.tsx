import React from 'react';
import { motion } from 'framer-motion';

interface StepperProps {
  steps: Array<{
    id: string | number;
    label: string;
    subtext?: string;
    date?: string;
    description?: string;
  }>;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({ steps, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 via-purple-500/50 to-blue-500/50" />
      
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className="relative flex items-start mb-8 last:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
        >
          {/* Step indicator */}
          <motion.div
            className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm" />
          </motion.div>
          
          {/* Content */}
          <div className="ml-6 flex-1">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">{step.label}</h3>
                {step.date && (
                  <span className="text-sm text-violet-300 font-medium">{step.date}</span>
                )}
              </div>
              
              {step.subtext && (
                <p className="text-purple-200 text-sm mb-3">{step.subtext}</p>
              )}
              
              {step.description && (
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};