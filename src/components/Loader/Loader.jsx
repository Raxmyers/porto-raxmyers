import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.svg';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth loading progress with easing
    const duration = 2500; // 2.5 seconds
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);
      
      // Ease out cubic for smooth deceleration
      const eased = 100 - Math.pow(1 - progress / 100, 3) * 100;
      
      setProgress(eased);
      
      if (progress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setLoading(false), 400);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="loader-content">
            <motion.div
              className="logo-wrapper"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ 
                duration: 1, 
                ease: [0.34, 1.56, 0.64, 1],
                opacity: { duration: 0.6 }
              }}
            >
              <img src={logo} alt="Logo" className="loader-logo" />
              <div className="logo-glow"></div>
            </motion.div>

            <motion.h2
              className="loader-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.4, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Muhammad Rio
            </motion.h2>

            <motion.p
              className="loader-subtitle mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.6, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Cyber Security Engineer
            </motion.p>

            <motion.div 
              className="progress-container"
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                className="progress-bar"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </motion.div>

            <motion.p
              className="progress-text mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {Math.floor(progress)}%
            </motion.p>
          </div>

          <div className="loader-bg-effect">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
