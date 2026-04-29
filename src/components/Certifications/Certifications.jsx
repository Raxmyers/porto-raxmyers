import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: '2024',
      credentialId: 'ECC1234567890',
      description: 'Advanced penetration testing and ethical hacking certification',
      link: '#',
      skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment']
    },
    {
      title: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2023',
      credentialId: 'COMP-SEC-2023',
      description: 'Foundation-level security certification covering essential security concepts',
      link: '#',
      skills: ['Security Fundamentals', 'Risk Management', 'Cryptography']
    },
    {
      title: 'Certified Information Systems Security Professional (CISSP)',
      issuer: 'ISC²',
      date: '2024',
      credentialId: 'ISC2-123456',
      description: 'Advanced security management and architecture certification',
      link: '#',
      skills: ['Security Architecture', 'Risk Management', 'Security Operations']
    },
    {
      title: 'Offensive Security Certified Professional (OSCP)',
      issuer: 'Offensive Security',
      date: '2023',
      credentialId: 'OS-54321',
      description: 'Hands-on penetration testing certification',
      link: '#',
      skills: ['Exploit Development', 'Buffer Overflow', 'Privilege Escalation']
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="mono nav-index">03.</span> Certifications
      </motion.h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="cert-header">
              <div className="cert-icon">
                <FiAward />
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                <FiExternalLink />
              </a>
            </div>

            <h3 className="cert-title">{cert.title}</h3>
            
            <div className="cert-meta">
              <span className="cert-issuer">{cert.issuer}</span>
              <span className="cert-date mono">{cert.date}</span>
            </div>

            <p className="cert-description">{cert.description}</p>

            <div className="cert-credential mono">
              Credential ID: {cert.credentialId}
            </div>

            <div className="cert-skills">
              {cert.skills.map((skill, i) => (
                <span key={i} className="cert-skill-tag mono">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
