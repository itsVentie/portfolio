import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Clock, ArrowSquareOut, FileText, X, MagnifyingGlassPlus } from "@phosphor-icons/react";
import styles from "@styles/Content/Content-articles.module.scss";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";

interface ArticleItem {
  id: number;
  title: string;
  desc: string;
  tag: string;
  date: string;
  url: string;
  imgSrc?: string;
}

export const ContentArticles: React.FC = () => {
  return <ArticlesFeed />;
};

const articlesData: ArticleItem[] = [
  {
    id: 1,
    title: "OSINT Pipeline Breakdown",
    desc: "How I structure OSINT workflows for DFIR cases, intelligence collection and deep cross-referencing indexes.",
    tag: "DFIR",
    date: "2026-06-20",
    url: "#",
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

export const ArticlesFeed: React.FC<{ standalone?: boolean }> = ({ standalone = true }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const gridContent = (
    <>
      {articlesData.map((item, index) => (
        <motion.div
          layout
          key={`article-${item.id}`}
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
              <span className={styles.typeLabel}>{item.tag}</span>
            </div>
          )}

          <div className={styles.cardInfo}>
            <div className={styles.metaTop}>
              <div className={styles.dateBadge}>
                <Clock size={14} />
                <span>{item.date}</span>
              </div>
            </div>

            <h3 className={styles.certTitle}>{item.title}</h3>
            <p className={styles.descText}>{item.desc}</p>

            <div className={styles.cardFooter}>
              <a href={item.url} className={styles.verifyBtn}>
                <span>Read Full Article</span>
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
              <FileText size={32} weight="thin" />
              <h1>Technical Articles</h1>
            </div>
            <p>Deep-dives, infrastructure tutorials and cyber security analytics.</p>
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
