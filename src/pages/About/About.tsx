import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Fingerprint,
  Books,
  Wrench,
  ShieldCheck,
  Brain,
  Palette,
  CaretDown,
  X,
  Image as ImageIcon,
  FilmStrip,
} from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";
import styles from "@styles/About/About.module.scss";
import { FR } from "country-flag-icons/react/3x2";

import { useAvatarManager } from "../../components/avatars/useAvatarManager";
import { photosData, gifsData } from "../../components/avatars/avatars.config";

export const About: React.FC = () => {
  const [isAkaOpen, setIsAkaOpen] = useState(false);

  const {
    isModalOpen,
    activeTab,
    currentAvatar,
    setActiveTab,
    openModal,
    closeModal,
    selectAvatar,
  } = useAvatarManager();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: custom * 0.1,
      },
    }),
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  const currentGridItems = activeTab === "photos" ? photosData : gifsData;

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
              <div
                className={styles.avatarWrapper}
                onClick={openModal}
                role="button"
                tabIndex={0}
              >
                <img
                  src={currentAvatar}
                  alt="Avatar"
                  className={styles.avatar}
                />
                <span className={styles.avatarGlow} />
                <div className={styles.avatarOverlay}>
                  <span>Change</span>
                </div>
              </div>

              <div className={styles.profileMeta}>
                <div className={styles.nameRow}>
                  <div className={styles.nicknameWrapper}>
                    <button
                      className={styles.nicknameBtn}
                      onClick={() => setIsAkaOpen(!isAkaOpen)}
                      aria-expanded={isAkaOpen}
                      type="button"
                    >
                      <span className={styles.nickname}>@Ventie</span>
                      <CaretDown
                        size={18}
                        weight="bold"
                        className={`${styles.caretIcon} ${isAkaOpen ? styles.caretIconOpen : ""}`}
                      />
                    </button>

                    {isAkaOpen && (
                      <div className={styles.akaDropdown}>
                        <div className={styles.akaTitle}>also known as</div>
                        <ul className={styles.akaList}>
                          <li>@Vyntiq</li>
                          <li>@Vintiq</li>
                          <li>@itsVentie</li>
                          <li>@Ventle</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className={styles.locationBadge}>
                    <FR title="France" className={styles.flagIcon} />
                    <span>Annecy, France</span>
                  </div>
                </div>

                <div className={styles.specialtyTitle}>
                  DevSecOps // DFIR • R&D
                </div>

                <div className={styles.badge}>Independent Researcher</div>
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
                <span className={styles.policyKey}>Identity</span>
                <p>
                  Age: 18+ // EPITA (Cybersécurité, Distance Learning) // INFJ-T
                  | Enneagram: 4w5 | Melancholic-Choleric
                </p>
              </div>
              <div className={styles.policyRow}>
                <span className={styles.policyKey}>Beliefs</span>
                <p>
                  Protestant // Libertarian // Chess: 2300+ Elo | Shogi: 5 Kyu
                </p>
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
                <span className={styles.rowTitle}>Professional Philosophy</span>
              </div>
              <p>
                I operate as an independent Purple Team researcher, bridging the
                gap between offensive vulnerability discovery and defensive
                infrastructure hardening. My commitment is to the advancement of
                security knowledge—a path defined by constant learning and
                technological skepticism. My research is for constructive
                purposes only, and I am not involved in any destructive,
                illegal, or malicious activities. I value technical depth over
                surface-level recognition.
              </p>
            </div>

            <div className={styles.gridRow}>
              <div className={styles.rowHeader}>
                <Fingerprint size={18} weight="thin" />
                <span className={styles.rowTitle}>
                  Technical Arsenal & Mastery
                </span>
              </div>
              <p>
                My foundation lies in systems-level programming with Go, C/C++,
                and Rust. I am deeply invested in applied cryptography (ECC,
                AES-GCM), memory forensics, and reverse engineering using Ghidra
                and IDA Pro. On the infrastructure side, I lean towards RHEL and
                Arch Linux, orchestrating complex environments with Kubernetes
                and Nginx. I thrive on solving ZKP challenges and diving into
                WinAPI/POSIX internals.
              </p>
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
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            className={styles.sectionHeader}
          >
            <div className={styles.sectionTitleRow}>
              <Brain size={22} weight="thin" />
              <h2>Intellect & Culture</h2>
            </div>
            <p>
              Ecosystem blueprints, core toolchains, and interests beyond the
              automated infrastructure layers.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className={styles.engineeringGrid}
          >
            <div className={styles.gridRow}>
              <div className={styles.rowHeader}>
                <Wrench size={18} weight="thin" />
                <span className={styles.rowTitle}>Toolchain & Workflow</span>
              </div>
              <p>
                Efficiency is driven by my curated environment: VS Code and Zed
                for development, Obsidian and Anytype for knowledge management.
                I prioritize digital sovereignty using tools like VeraCrypt,
                KeePassXC, and specialized privacy-hardened browsers. My
                infrastructure analysis involves everything from Shodan/Caido
                for reconnaissance to complex SIEM and memory forensic suites.
              </p>
            </div>

            <div className={styles.gridRow}>
              <div className={styles.rowHeader}>
                <Books size={18} weight="thin" />
                <span className={styles.rowTitle}>Beyond the Terminal</span>
              </div>
              <p>
                My intellectual landscape is shaped by classic literature,
                philosophy, and dark aesthetics. I find solace in grimdark lore
                and intricate worldbuilding, often exploring the parallels
                between cybersecurity and the complexities of human psychology.
                Inspired by pioneers like Kevin Mitnick and Aaron Swartz, I view
                technology as a tool for personal and societal liberation.
              </p>
            </div>

            <div className={styles.gridRow}>
              <div className={styles.rowHeader}>
                <Palette size={18} weight="thin" />
                <span className={styles.rowTitle}>Cultural Tapestry</span>
              </div>
              <p>
                My creative and downtime interests span from City Pop and Dark
                Ambient to the expansive worlds of Dark Fantasy. I am an avid
                follower of complex narrative-driven games and anime that
                challenge the status quo, both in terms of art style and
                storytelling. I believe that an informed life balances the
                rigors of high-level security research with the appreciation of
                mythology, folklore, and the arts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3>Select Avatar</h3>
                <button className={styles.closeBtn} onClick={closeModal}>
                  <X size={18} />
                </button>
              </div>

              <div className={styles.modalTabs}>
                <button
                  className={`${styles.tabBtn} ${activeTab === "photos" ? styles.tabBtnActive : ""}`}
                  onClick={() => setActiveTab("photos")}
                >
                  <ImageIcon size={16} />
                  <span>Photos</span>
                </button>
                <button
                  className={`${styles.tabBtn} ${activeTab === "gifs" ? styles.tabBtnActive : ""}`}
                  onClick={() => setActiveTab("gifs")}
                >
                  <FilmStrip size={16} />
                  <span>GIFs</span>
                </button>
              </div>

              <div className={styles.avatarGrid}>
                {currentGridItems.map((item) => (
                  <div
                    key={item.id}
                    className={`${styles.gridItem} ${currentAvatar === item.src ? styles.gridItemActive : ""}`}
                    onClick={() => selectAvatar(item.src)}
                  >
                    <img src={item.src} alt={item.alt} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
