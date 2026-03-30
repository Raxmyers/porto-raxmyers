import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-content text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mono text-gradient contact-pre">03. What's Next?</p>
        <h2 className="title glitch" data-text="Get In Touch">Get In Touch</h2>

        <p className="contact-desc">
          I'm currently open to new opportunities to secure infrastructure and build resilient systems.
          Whether you have a question, a potential project, or just want to discuss the latest zero-day,
          my inbox is always open.
        </p>

        <a href="mailto:muhammadrio2806@gmail.com" className="btn contact-btn">
          <FiMail className="btn-icon" /> Establish Secure Connection
        </a>
      </motion.div>

      <footer className="footer mono">
        <div className="social-links">
          <a href="https://github.com/Raxmyers" aria-label="GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/muhammadrio2806?utm_source=share_via&utm_content=profile&utm_medium=member_ios" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="https://twitter.com" aria-label="Twitter"><FiTwitter /></a>
        </div>
        <a href="https://github.com/bchiang7/v4" target="_blank" rel="noopener noreferrer" className="credits">
          <p>Designed with inspiration from Brittany Chiang</p>
          <p>Built by Raxmyers. Security cleared.</p>
        </a>
      </footer>
    </section>
  );
};

export default Contact;
