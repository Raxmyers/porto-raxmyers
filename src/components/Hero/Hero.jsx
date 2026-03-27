import React from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiShield } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="mono greeting">Hi, my name is</p>
        <h1 className="glitch name" data-text="Rax.">Rax.</h1>
        <h2 className="subtitle">I secure the digital frontier.</h2>

        <p className="description">
          I'm a <span className="text-gradient">Cyber Security Engineer</span> specializing in
          penetration testing, network security, and defensive architecture.
          I build resilient systems and hunt vulnerabilities before they are exploited.
        </p>

        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">
            <FiTerminal className="btn-icon" /> View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            <FiShield className="btn-icon" /> Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-graphic"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="radar-container">
          <div className="radar"></div>
          <div className="radar-sweep"></div>
          <div className="blip blip-1"></div>
          <div className="blip blip-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
