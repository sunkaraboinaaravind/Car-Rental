import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div style={{
      padding: '8rem 2rem 4rem',
      textAlign: 'center',
      background: 'radial-gradient(circle at top center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)'
    }}>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem' }}
      >
        Drive Your <span className="gradient-text">Dreams</span> Today
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}
      >
        Experience luxury and performance with our curated fleet of premium vehicles. 
        Instant booking, transparent pricing, and world-class service.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
          Explore Fleet
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
