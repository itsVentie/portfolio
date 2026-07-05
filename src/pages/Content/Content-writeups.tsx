import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Clock, ArrowSquareOut, TerminalWindow, X, MagnifyingGlassPlus } from "@phosphor-icons/react";
import styles from "@styles/Content/Content-writeup.module.scss";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";
import TryHackMe from "@assets/svg/tryhackme.svg";
import HackTheBox from "@assets/svg/hackthebox.svg";

interface WriteupItem {
  id: number;
  title: string;
  desc: string;
  tag: "HTB" | "THM" | "Generic";
  difficulty: "Very easy" | "Easy" | "Medium" | "Hard" | "Insane";
  date: string;
  url: string;
  imgSrc?: string;
}

export const ContentWriteups: React.FC = () => {
  return <WriteupsFeed />;
};

const writeupsData: WriteupItem[] = [
  {
    id: 1,
    title: "Wonderland: Falling Down the Rabbit Hole",
    desc: "Wonderland is a medium-difficulty machine on TryHackMe that rewards patience and attention to detail.",
    tag: "THM",
    difficulty: "Medium",
    date: "2026-01-29",
    url: "https://medium.com/@ventie/wonderland-falling_down_the_rabbit_hole_thm_write_up_b006625b09e1",
    imgSrc: "https://tryhackme-images.s3.amazonaws.com/room-icons/fdba6eaf85513262b2a9b12875b0f342.jpeg"
  },
  {
    id: 2,
    title: "CorpDown-2",
    desc: "CorpDown-2 is a challenging machine on Hack The Box that requires a deep understanding of web vulnerabilities.",
    tag: "HTB",
    difficulty: "Hard",
    date: "2026-02-15",
    url: "https://medium.com/@ventie/corpdown-2_htb_write_up_1234567890",
    imgSrc: "https://cdn.services-k8s.prod.aws.htb.systems/content/sherlocks/avatar/a1fbcd80-c858-41fe-b679-bfc915f25423-1781028566.png"
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

export const WriteupsFeed: React.FC<{ standalone?: boolean }> = ({ standalone = true }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const gridContent = (
    <>
      {writeupsData.map((item, index) => (
        <motion.div
          layout
          key={`writeup-${item.id}`}
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
                <span>Open Preview</span>
              </div>

              <div className={styles.typeLabelSvg}>
                <img 
                  src={item.tag === "THM" ? TryHackMe : HackTheBox} 
                  alt={item.tag} 
                />
              </div>
            </div>
          )}

          <div className={styles.cardInfo}>
            <div className={styles.metaTop}>
              <div className={styles.dateBadge}>
                <Clock size={14} />
                <span>{item.date}</span>
              </div>
              <span className={`${styles.statusBadge} ${styles[item.difficulty.toLowerCase().replace(" ", "")]}`}>
                {item.difficulty}
              </span>
            </div>

            <h3 className={styles.certTitle}>{item.title}</h3>
            <p className={styles.descText}>{item.desc}</p>

            <div className={styles.cardFooter}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.verifyBtn}>
                <span>Read Writeup</span>
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
              <TerminalWindow size={32} weight="thin" />
              <h1>Lab Writeups</h1>
            </div>
            <p>Comprehensive walkthroughs, exploitation chains, and tactical solutions for security labs.</p>
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