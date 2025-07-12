import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  gap?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ 
  children, 
  gap = 24,
  autoplay = false,
  autoplayDelay = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === children.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? children.length - 1 : prevIndex - 1;
      }
    });
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        paginate(1);
      }, autoplayDelay);
      
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, currentIndex]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative h-full" style={{ minHeight: '400px' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div style={{ marginRight: gap / 2, marginLeft: gap / 2 }}>
              {children[currentIndex]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors duration-300"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors duration-300"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};