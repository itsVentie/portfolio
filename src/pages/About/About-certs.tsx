import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Certificate,
  ShieldCheck,
  ArrowSquareOut,
  CalendarBlank,
  X,
  MagnifyingGlassPlus,
  Medal,
  GraduationCap,
  SquaresFour,
} from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";
import styles from "@styles/About/About-certs.module.scss";
import { certsData } from "../../components/certs.config";

type FilterType = "all" | "certification" | "qualification" | "badge";

export const AboutCerts: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredCerts = certsData.filter(
    (cert) => activeFilter === "all" || cert.type === activeFilter,
  );

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
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
    },
    exit: { opacity: 0, scale: 0.97, transition: { duration: 0.15 } },
  };

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className={styles.headerArea}
          >
            <div className={styles.titleRow}>
              <Certificate size={32} weight="thin" />
              <h1>Certificates & Qualifications</h1>
            </div>
            <p>
              Verified expert credentials, professional defense-readiness
              indices, and academic technical milestones in DevSecOps and DFIR
              research.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className={styles.filterTabs}
          >
            <button
              className={`${styles.filterBtn} ${activeFilter === "all" ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              <SquaresFour size={16} />
              <span>All ({certsData.length})</span>
            </button>
            <button
              className={`${styles.filterBtn} ${activeFilter === "certification" ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter("certification")}
            >
              <Certificate size={16} />
              <span>
                Certificates (
                {certsData.filter((c) => c.type === "certification").length})
              </span>
            </button>
            <button
              className={`${styles.filterBtn} ${activeFilter === "badge" ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter("badge")}
            >
              <Medal size={16} />
              <span>
                Badges ({certsData.filter((c) => c.type === "badge").length})
              </span>
            </button>
            <button
              className={`${styles.filterBtn} ${activeFilter === "qualification" ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter("qualification")}
            >
              <GraduationCap size={16} />
              <span>
                Qualifications (
                {certsData.filter((c) => c.type === "qualification").length})
              </span>
            </button>
          </motion.div>

          <Divider />

          <motion.div layout className={styles.gridContainer}>
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert, index) => (
                <motion.div
                  layout
                  key={cert.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.2 },
                  }}
                  custom={index}
                  className={styles.certCard}
                >
                  <div
                    className={styles.imageWrapper}
                    onClick={() => setSelectedImg(cert.imgSrc)}
                  >
                    <img
                      src={cert.imgSrc}
                      alt={cert.title}
                      className={styles.certImg}
                    />
                    <div className={styles.imageOverlay}>
                      <MagnifyingGlassPlus size={24} />
                      <span>View Document</span>
                    </div>
                    {cert.badgeSrc && (
                      <div className={styles.badgeWidget}>
                        <img src={cert.badgeSrc} alt="Badge" />
                      </div>
                    )}
                    <span
                      className={`${styles.typeLabel} ${styles[cert.type]}`}
                    >
                      {cert.type}
                    </span>
                  </div>

                  <div className={styles.cardInfo}>
                    <div className={styles.metaTop}>
                      <div className={styles.dateBadge}>
                        <CalendarBlank size={14} />
                        <span>{cert.date}</span>
                      </div>
                      <div className={styles.statusBadge}>
                        <ShieldCheck size={14} weight="fill" />
                        <span>Verified</span>
                      </div>
                    </div>

                    <h3 className={styles.certTitle}>{cert.title}</h3>
                    <span className={styles.certIssuer}>{cert.issuer}</span>

                    <div className={styles.cardFooter}>
                      <div className={styles.idMeta}>
                        <span className={styles.idLabel}>ID/SERIAL</span>
                        <span className={styles.idValue}>{cert.idCode}</span>
                      </div>
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.verifyBtn}
                      >
                        <span>Verify</span>
                        <ArrowSquareOut size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {selectedImg && (
          <div
            className={styles.viewerOverlay}
            onClick={() => setSelectedImg(null)}
          >
            <button
              className={styles.closeViewer}
              onClick={() => setSelectedImg(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={styles.viewerContent}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImg} alt="Certificate Enlarged View" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
