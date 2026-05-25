import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Terminal,
  ShieldCheck,
  MagnifyingGlass,
  PaperPlaneTilt
} from '@phosphor-icons/react';
import { Navbar } from '../components/Navbar'; 
import { Footer } from '../components/Footer';
import { Divider } from '../components/Divider';
import styles from '../page-style/Home.module.scss';
import avatarImg from '../assets/avatar.jpg';
import { FR } from 'country-flag-icons/react/3x2';

export const Home: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: custom * 0.1 }
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.pageWrapper}>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              animate="visible" 
              custom={1} 
              className={styles.profileHeader}
            >
              <div className={styles.avatarWrapper}>
                <img 
                  src={avatarImg} 
                  alt="Avatar" 
                  className={styles.avatar}
                />
                <span className={styles.avatarGlow} />
              </div>

              <div className={styles.profileMeta}>
                <div className={styles.nameRow}>
                  <span className={styles.nickname}>@Ventie</span>
                  <div className={styles.locationBadge}>
                    <FR title="France" className={styles.flagIcon} />
                    <span>France</span>
                  </div>
                </div>
                
                <div className={styles.specialtyTitle}>
                  DevSecOps // DFIR R&D
                </div>

                <div className={styles.badge}>
                  Independent Researcher
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className={styles.policySection}
            >
              <div className={styles.policyRow}>
                <span className={styles.policyKey}>Engagement</span>
                <p>Open for R&D, teaming, infrastructure audits, CTFs, and technical discussions. Don't sell anything.</p>
              </div>
              <div className={styles.policyRow}>
                <span className={styles.policyKey}>Conduct</span>
                <p>Zero tolerance for conflict or drama. I do not initiate disputes and expect absolute professionalism.</p>
              </div>
              <div className={styles.policyRow}>
                <span className={styles.policyKey}>Compliance</span>
                <p>Strictly no involvement in illegal activities, doxing, swatting, or malicious drainer scenes. Academic and defense research purposes only.</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            animate="visible" 
            custom={4} 
            className={styles.engineeringGrid}
          >
            <div className={styles.gridRow}>
              <div className={styles.rowHeader}>
                <ShieldCheck size={18} weight="thin" />
                <span className={styles.rowTitle}>DevSecOps & Core</span>
              </div>
              <p>Go, C/C++, Rust, WinAPI, Memory Management. Hardening CI/CD pipelines, container security, and applied cryptography (ECC, ZKP).</p>
            </div>
            <div className={styles.gridRow}>
              <div className={styles.rowHeader}>
                <MagnifyingGlass size={18} weight="thin" />
                <span className={styles.rowTitle}>DFIR & Research</span>
              </div>
              <p>Memory forensics, artifact analysis, evasion techniques, and reverse engineering using Ghidra and IDA Pro.</p>
            </div>
          </motion.div>
        </div>
      </section>
   <Divider />
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-100px' }}
            custom={1}
            className={styles.sectionHeader}
          >
            <div className={styles.sectionTitleRow}>
              <Terminal size={22} weight="thin" />
              <h2>Contact</h2>
            </div>
            <p>Get in touch for research partnerships, technical inquiries, or collaboration.</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className={styles.formWrapper}
          >
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name / Company</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name or organization" 
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com" 
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message, project details, or proposal..." 
                  required 
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <PaperPlaneTilt size={16} weight="thin" />
              </button>
            </form>
          </motion.div>


        </div>
      </section>
      <Footer />
    </div>
  );
};