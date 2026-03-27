import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}
    >
      <div className="nav-container">
        <a href="#home" className="logo mono">
          <span className="text-gradient">&lt;Muhammad Rio/&gt;</span>
        </a>

        <div className="desktop-nav">
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} className="nav-link">
              <span className="mono nav-index">0{i + 1}.</span> {link.name}
            </a>
          ))}
          <a href="#contact" className="btn resume-btn">Hire Me</a>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiOutlineX size={28} /> : <HiMenuAlt3 size={28} />}
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="mobile-nav glass"
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="mono nav-index">0{i + 1}.</span> {link.name}
            </a>
          ))}
          <a href="#contact" className="btn resume-btn" onClick={() => setIsOpen(false)}>
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
