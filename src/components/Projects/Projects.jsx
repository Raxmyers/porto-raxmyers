import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Auto-PenTest Toolkit',
      description: 'An automated vulnerability scanner and exploitation framework written in Python. It strings together well-known tools like Nmap and Metasploit, presenting results in a unified, parsed format for quick triage.',
      techList: ['Python', 'Docker', 'Bash', 'REST API'],
      github: '#',
      external: '#'
    },
    {
      title: 'SecureNet IDS',
      description: 'A custom Intrusion Detection System that leverages machine learning models to analyze network traffic and classify anomalous behavior associated with zero-day attacks.',
      techList: ['TensorFlow', 'Scapy', 'C++', 'SIEM'],
      github: '#',
      external: '#'
    },
    {
      title: 'CryptoVault End-to-End',
      description: 'A secure messaging application featuring end-to-end encryption using AES-256 and RSA. Includes perfect forward secrecy and a zero-knowledge architecture.',
      techList: ['React', 'Node.js', 'WebSockets', 'Cryptography'],
      github: '#',
      external: '#'
    },
    {
      title: 'Malware Sandbox Sandboxer',
      description: 'A lightweight virtualized environment for safe malware detonation and analysis. Automatically captures API calls, registry changes, and network activity of potential threats.',
      techList: ['C#', 'Windows API', 'VirtualBox SDK', 'Python'],
      github: '#',
      external: '#'
    },
    {
      title: 'Zero-Trust Proxy',
      description: 'A microservice-based identity-aware proxy that enforces strict access controls based on zero-trust principles before granting access to internal resources.',
      techList: ['Go', 'Kubernetes', 'OAuth2', 'Redis'],
      github: '#',
      external: '#'
    },
    {
      title: 'OSINT Gatherer',
      description: 'A scalable web scraper configured to gather Open-Source Intelligence from various platforms, forums, and the dark web to alert on compromised credentials.',
      techList: ['Python', 'Selenium', 'Elasticsearch', 'Tor'],
      github: '#',
      external: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="mono nav-index">02.</span> Projects & Research
      </motion.h2>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, i) => (
          <motion.div key={i} className="project-card glass" variants={itemVariants}>
            <div className="project-header">
              <div className="folder-icon">
                <FiFolder size={40} />
              </div>
              <div className="project-links">
                <a href={project.github} aria-label="GitHub Link">
                  <FiGithub size={20} />
                </a>
                <a href={project.external} aria-label="External Link">
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <h3 className="project-title">
              <a href={project.external}>{project.title}</a>
            </h3>
            
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            
            <ul className="project-tech-list">
              {project.techList.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <div className="more-projects mono">
        <a href="https://github.com" className="btn" target="_blank" rel="noopener noreferrer">
          View Full Archive
        </a>
      </div>
    </section>
  );
};

export default Projects;
