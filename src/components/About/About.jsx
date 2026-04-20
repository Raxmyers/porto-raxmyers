import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import profilePhoto from '../../assets/profile-photo.png';
import './About.css';

const About = () => {
  const skills = [
    'Penetration Testing', 'Network Security', 'SOC L1',
    'Incident Response', 'Malware Analysis', 'Risk Assessment',
    'Python', 'Bash / Shell', 'Security Architecture'
  ];

  return (
    <section id="about" className="about-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="mono nav-index">01.</span> About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Hello! My name is Muhammad Rio Triguntoro and I enjoy exploring the architecture of digital systems, finding their breaking points, and fortifying them. My interest in cyber security started back when I tried to reverse engineer a basic multiplayer game to understand its logic.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an enterprise level, analyzing critical vulnerabilities and designing robust security infrastructures. My main focus these days is building scalable defensive architectures and automating threat detection for diverse environments.
          </p>
          <p>Here are a few technologies and domains I've been working with recently:</p>

          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i}><FiChevronRight className="skill-icon" /> {skill}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="image-container">
            <div className="image-wrapper glass">
              <img src={profilePhoto} alt="Rax Profile" className="profile-photo" />
            </div>
            <div className="image-outline"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
