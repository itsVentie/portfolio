import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Clock, ArrowSquareOut, Newspaper, X, MagnifyingGlassPlus } from "@phosphor-icons/react";
import styles from "@styles/Content/Content-blog.module.scss";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";

interface BlogItem {
  id: number;
  title: string;
  desc: string;
  date: string;
  url: string;
  tag?: string;
  level?: "Easy" | "Medium" | "Hard";
  platform: "htb" | "thm" | "generic";
  imgSrc?: string;
}

export const ContentResearch: React.FC = () => {
  return <ContentResearch />;
};

const blogData: BlogItem[] = [
  {
    id: 1,
    title: "Reverse Engineering Notes",
    desc: "Static analysis workflow for unknown binaries and malware reversing fundamentals.",
    tag: "RE",
    date: "2026-06-18",
    url: "#",
    platform: "generic",
    imgSrc: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600"
  },
  {
    id: 2,
    title: "TryHackMe: Wonderland: Falling Down the Rabbit Hole",
    desc: "Detailed CTF walkthrough and custom python privilege escalation vectors.",
    level: "Medium",
    date: "2026-06-10",
    url: "https://medium.com/@ventie",
    platform: "thm",
    imgSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600"
  }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: custom * 0.1 },
  }),
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.15 } },
};

export const BlogFeed: React.FC<{ standalone?: boolean }> = ({ standalone = true }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const gridContent = (
    <>
      {blogData.map((item, index) => (
        <motion.div
          layout
          key={`blog-${item.id}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
          custom={index}
          className={styles.certCard}
        >
          {item.imgSrc && (
            <div className={styles.imageWrapper} onClick={() => setSelectedImg(item.imgSrc || null)}>
              <img src={item.imgSrc} alt={item.title} className={styles.certImg} />
              <div className={styles.imageOverlay}>
                <MagnifyingGlassPlus size={24} />
                <span>Zoom Cover</span>
              </div>
              <span className={`${styles.typeLabel} ${styles[item.platform]}`}>
                {item.platform.toUpperCase()}
              </span>
            </div>
          )}

          <div className={styles.cardInfo}>
            <div className={styles.metaTop}>
              <div className={styles.dateBadge}>
                <Clock size={14} />
                <span>{item.date}</span>
              </div>
              {item.level && (
                <div className={`${styles.statusBadge} ${styles[item.level.toLowerCase()]}`}>
                  <span>{item.level}</span>
                </div>
              )}
              {item.tag && <span className={styles.tag}>{item.tag}</span>}
            </div>

            <h3 className={styles.certTitle}>{item.title}</h3>
            <p className={styles.descText}>{item.desc}</p>

            <div className={styles.cardFooter}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.verifyBtn}>
                <span>Read Note</span>
                <ArrowSquareOut size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedImg && (
          <div className={styles.viewerOverlay} onClick={() => setSelectedImg(null)}>
            <button className={styles.closeViewer} onClick={() => setSelectedImg(null)}>
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
              <img src={selectedImg} alt="Enlarged View" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );

  if (!standalone) return gridContent;

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className={styles.headerArea}>
            <div className={styles.titleRow}>
              <Newspaper size={32} weight="thin" />
              <h1>Personal Blog & Writeups</h1>
            </div>
            <p>Thoughts, active directory labs documentation, and CTF challenges writeups.</p>
          </motion.div>
          <Divider />
          <motion.div layout className={styles.gridContainer}>
            <AnimatePresence mode="popLayout">{gridContent}</AnimatePresence>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
