import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Terminal,
  CaretDown,
  ShieldCheck,
  MagnifyingGlass,
  PaperPlaneTilt,
  X,
  Image as ImageIcon,
  FilmStrip,
  Cpu,
  Code
} from "@phosphor-icons/react";
import { Footer } from "../components/Footer";
import { Divider } from "../components/Divider";
import { AddedSection } from "../components/AddedSection";
import styles from "@styles/Home.module.scss";
import { FR } from "country-flag-icons/react/3x2";

import { useAvatarManager } from "../components/avatars/useAvatarManager";
import { photosData, gifsData } from "../components/avatars/avatars.config";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isAkaOpen, setIsAkaOpen] = useState(false);
  const [activeTabFocus, setActiveTabFocus] = useState<"engineering" | "forensics">("engineering");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const tabContentVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                        <div className={styles.akaTitle}>{t("hero.aka")}</div>
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
                  {t("hero.specialty")}
                </div>

                <div className={styles.badge}>{t("hero.researcher")}</div>
              </div>
            </motion.div>

            <AddedSection variants={fadeUp} custom={2} />
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className={styles.expertFocusSection}
          >
            <div className={styles.focusContainer}>
              <div className={styles.focusTabs}>
                <button
                  className={`${styles.focusTabBtn} ${activeTabFocus === "engineering" ? styles.focusTabBtnActive : ""}`}
                  onClick={() => setActiveTabFocus("engineering")}
                >
                  <Code size={18} weight="regular" />
                  <span>{t("focus.engineering")}</span>
                </button>
                <button
                  className={`${styles.focusTabBtn} ${activeTabFocus === "forensics" ? styles.focusTabBtnActive : ""}`}
                  onClick={() => setActiveTabFocus("forensics")}
                >
                  <Cpu size={18} weight="regular" />
                  <span>{t("focus.forensics")}</span>
                </button>
              </div>

              <div className={styles.focusBody}>
                <AnimatePresence mode="wait">
                  {activeTabFocus === "engineering" ? (
                    <motion.div
                      key="engineering"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      className={styles.focusContent}
                    >
                      <h3>{t("focus.engineeringTitle")}</h3>
                      <p>{t("focus.engineeringDesc")}</p>
                      <div className={styles.focusTags}>
                        <span>WinAPI</span>
                        <span>Memory Management</span>
                        <span>Applied Crypto</span>
                        <span>CI/CD Hardening</span>
                        <span>K8s Security</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="forensics"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      className={styles.focusContent}
                    >
                      <h3>{t("focus.forensicsTitle")}</h3>
                      <p>{t("focus.forensicsDesc")}</p>
                      <div className={styles.focusTags}>
                        <span>Memory Forensics</span>
                        <span>Artifact Analysis</span>
                        <span>Evasion Techniques</span>
                        <span>Reverse Engineering</span>
                        <span>Purple Teaming</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className={styles.sideMetrics}>
              <div className={styles.metricItemCard}>
                <div className={styles.metricHeader}>
                  <ShieldCheck size={20} weight="thin" />
                  <span>{t("metrics.statusTitle")}</span>
                </div>
                <div className={styles.metricBody}>
                  <span className={styles.statusDotActive}></span>
                  <h4>{t("metrics.statusBody")}</h4>
                </div>
              </div>
              <div className={styles.metricItemCard}>
                <div className={styles.metricHeader}>
                  <MagnifyingGlass size={20} weight="thin" />
                  <span>{t("metrics.focusTitle")}</span>
                </div>
                <div className={styles.metricBody}>
                  <h4>{t("metrics.focusBody")}</h4>
                </div>
              </div>
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
              <Terminal size={22} weight="thin" />
              <h2>{t("contact.title")}</h2>
            </div>
            <p>{t("contact.desc")}</p>
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
                <label htmlFor="name">{t("contact.nameLabel")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.namePlaceholder")}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">{t("contact.emailLabel")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.emailPlaceholder")}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">{t("contact.messageLabel")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.messagePlaceholder")}
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>{t("contact.submit")}</span>
                <PaperPlaneTilt size={16} weight="thin" />
              </button>
            </form>
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
                <h3>{t("avatarModal.title")}</h3>
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
                  <span>{t("avatarModal.photos")}</span>
                </button>
                <button
                  className={`${styles.tabBtn} ${activeTab === "gifs" ? styles.tabBtnActive : ""}`}
                  onClick={() => setActiveTab("gifs")}
                >
                  <FilmStrip size={16} />
                  <span>{t("avatarModal.gifs")}</span>
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