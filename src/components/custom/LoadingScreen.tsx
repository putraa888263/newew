import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const interval = 30;
    const increment = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment + Math.random() * 2;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onLoadingComplete, 800);
          }, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0d0d0d] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(77, 171, 247, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(77, 171, 247, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '50px 50px']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </div>

          {/* Central Logo Animation */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Rotating Rings */}
            <div className="relative w-40 h-40 mb-8">
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{
                  borderTopColor: '#4dabf7',
                  borderRightColor: 'transparent',
                  borderBottomColor: '#ff6b9d',
                  borderLeftColor: 'transparent'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Middle Ring */}
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-transparent"
                style={{
                  borderTopColor: 'transparent',
                  borderRightColor: '#ff922b',
                  borderBottomColor: 'transparent',
                  borderLeftColor: '#9775fa'
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Inner Ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-[#4dabf7]"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Center Text */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-display text-4xl gradient-text">M</span>
              </motion.div>

              {/* Orbiting Dots */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: i === 0 ? '#4dabf7' : i === 1 ? '#ff6b9d' : '#ff922b',
                    top: '50%',
                    left: '50%'
                  }}
                  animate={{
                    x: [
                      Math.cos((i * 120 * Math.PI) / 180) * 70,
                      Math.cos(((i * 120 + 360) * Math.PI) / 180) * 70
                    ],
                    y: [
                      Math.sin((i * 120 * Math.PI) / 180) * 70,
                      Math.sin(((i * 120 + 360) * Math.PI) / 180) * 70
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>

            {/* Brand Name */}
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-3xl md:text-4xl tracking-wider text-white">
                MULTIMEDIA
                <span className="gradient-text">.CREATIVE</span>
              </h1>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="font-mono text-xs text-gray-400 tracking-widest">
                LOADING EXPERIENCE
              </span>
              <motion.span
                className="font-mono text-xs text-[#4dabf7]"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #4dabf7, #ff6b9d, #ff922b)'
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.span
              className="font-mono text-sm text-gray-500 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {Math.floor(progress)}%
            </motion.span>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#4dabf7] opacity-30" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#ff6b9d] opacity-30" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#ff922b] opacity-30" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#9775fa] opacity-30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
