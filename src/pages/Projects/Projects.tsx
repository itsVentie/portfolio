import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CaretDown,
  X,
  Image as ImageIcon,
  FilmStrip,
  Folder,
  ArrowSquareOut,
} from "@phosphor-icons/react";
import { techMap } from "../../components/tech.config";
import { Divider } from "../../components/Divider";
import { Footer } from "../../components/Footer";
import styles from "@styles/Projects/Projects.module.scss";
import { FR } from "country-flag-icons/react/3x2";

import { useAvatarManager } from "../../components/avatars/useAvatarManager";
import { photosData, gifsData } from "../../components/avatars/avatars.config";
import { projectsData } from "../../components/projects.config";

export const Projects: React.FC = () => {
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
                onKeyDown={(e) => e.key === "Enter" && openModal()}
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
                      onClick={() => setIsAkaOpen((v) => !v)}
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
                    <span>France</span>
                  </div>
                </div>

                <div className={styles.specialtyTitle}>
                  DevSecOps // DFIR R&amp;D
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
                <span className={styles.policyKey}>Engagement</span>
                <p>
                  Open for R&amp;D, teaming, infrastructure audits, CTFs, and
                  technical discussions. Don't sell anything.
                </p>
              </div>
              <div className={styles.policyRow}>
                <span className={styles.policyKey}>Compliance</span>
                <p>
                  Strictly no involvement in illegal activities, doxing,
                  swatting, or malicious drainer scenes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className={styles.projectsGrid}
          >
            {projectsData.map((project) => (
              <div key={project.id} className={styles.gridRow}>
                <div className={styles.projectImage}>
                  <img src={project.imgSrc} alt={project.title} />
                </div>

                <div className={styles.rowHeader}>
                  <Folder size={18} weight="thin" />
                  <span className={styles.rowTitle}>{project.title}</span>
                  <span className={styles.categoryBadge}>
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "auto" }}
                    aria-label={project.title}
                  >
                    <ArrowSquareOut size={16} />
                  </a>
                </div>

                <p>{project.description}</p>

                <div className={styles.tagRow}>
                  {project.tags.map((tag) => {
                    const tech = techMap[tag];
                    return tech ? (
                      <a
                        key={tag}
                        href={tech.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.techIconWrapper}
                        title={tag}
                      >
                        <img
                          src={tech.icon}
                          alt={tag}
                          className={styles.techIcon}
                        />
                      </a>
                    ) : (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
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
                    className={`${styles.gridItem} ${
                      currentAvatar === item.src ? styles.gridItemActive : ""
                    }`}
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
