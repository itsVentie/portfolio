import React from 'react';
import styles from '../../page-style/About.module.scss';

export const About: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <header className={styles.header}>
        <h1>Ventie</h1>
        <p className={styles.subtitle}>DevSecOps / DFIR • R&D / Independent</p>
      </header>

      <div className={styles.contentGrid}>
        <div className={styles.bioSection}>
          <h2>Identity & Creed</h2>
          <ul>
            <li><strong>Age:</strong> 18+</li>
            <li><strong>Location:</strong> Annecy, France</li>
            <li><strong>Education:</strong> EPITA (Cybersécurité, Distance Learning)</li>
            <li><strong>Personality:</strong> INFJ-T | Enneagram: 4w5 | Melancholic-Choleric</li>
            <li><strong>Beliefs:</strong> Protestant | Libertarian</li>
            <li><strong>Chess:</strong> 2300+ Elo | Shogi: 5 Kyu</li>
          </ul>
        </div>

        <div className={styles.philosophySection}>
          <h2>Professional Philosophy</h2>
          <p>
            I operate as an independent Purple Team researcher, bridging the gap between offensive 
            vulnerability discovery and defensive infrastructure hardening. My commitment is to 
            the advancement of security knowledge—a path defined by constant learning and 
            technological skepticism. I maintain a strict ethical boundary: my research is for 
            constructive purposes only, and I am not involved in any destructive, illegal, or 
            malicious activities. I value technical depth over surface-level recognition.
          </p>
        </div>

        <div className={styles.skillsSummary}>
          <h2>Technical Arsenal & Mastery</h2>
          <p>
            My foundation lies in systems-level programming with <strong>Go, C/C++, and Rust</strong>. 
            I am deeply invested in <strong>applied cryptography</strong> (ECC, AES-GCM), 
            <strong>memory forensics</strong>, and reverse engineering using Ghidra and IDA Pro. 
            On the infrastructure side, I lean towards <strong>RHEL and Arch Linux</strong>, orchestrating 
            complex environments with Kubernetes and Nginx. I thrive on solving ZKP (Zero-Knowledge Proof) 
            challenges and diving into WinAPI/POSIX internals to understand how systems truly behave.
          </p>
        </div>

        <div className={styles.stackSection}>
          <h2>Toolchain & Workflow</h2>
          <p>
            Efficiency is driven by my curated environment: <strong>VS Code and Zed</strong> for development, 
            <strong>Obsidian and Anytype</strong> for knowledge management. I prioritize digital sovereignty 
            using tools like <strong>VeraCrypt, KeePassXC, and specialized privacy-hardened browsers</strong>. 
            My infrastructure analysis involves everything from Shodan/Caido for reconnaissance 
            to complex SIEM and memory forensic suites for post-incident investigation.
          </p>
        </div>

        <div className={styles.interestsSection}>
          <h2>Beyond the Terminal</h2>
          <p>
            My intellectual landscape is shaped by classic literature, philosophy, and dark 
            aesthetics. I find solace in <strong>grimdark lore</strong> and intricate worldbuilding, 
            often exploring the parallels between cybersecurity and the complexities of human psychology. 
            Whether it's dissecting an OS kernel, analyzing social engineering vectors, or 
            mastering a chess opening, I look for systems that reward strategic depth and 
            long-term vision. Inspired by pioneers like Kevin Mitnick and Aaron Swartz, 
            I view technology as a tool for personal and societal liberation.
          </p>
        </div>

        <div className={styles.cultureSection}>
          <h2>Cultural Tapestry</h2>
          <p>
            My creative and downtime interests span from <strong>City Pop and Dark Ambient</strong> 
            to the expansive worlds of <strong>Dark Fantasy</strong>. I am an avid follower of 
            complex narrative-driven games and anime that challenge the status quo, both 
            in terms of art style and storytelling. I believe that an informed life balances 
            the rigors of high-level security research with the appreciation of mythology, 
            folklore, and the arts.
          </p>
        </div>
      </div>
    </section>
  );
};