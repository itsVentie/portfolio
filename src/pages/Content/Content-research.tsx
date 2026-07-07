import React from "react";
import { motion, type Variants } from "framer-motion";
import { Microscope, ArrowSquareOut, Clock } from "@phosphor-icons/react";
import styles from "@styles/Content/Content-blog.module.scss";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";

interface ResearchItem {
  id: number;
  title: string;
  desc: string;
  date: string;
  url: string;
  category: string;
}

const researchData: ResearchItem[] = [
  {
    id: 1,
    title: "Threat Intelligence Models & Memory Optimization",
    desc: "Analysis of memory allocation patterns and indicators of compromise patterns in high-load security applications.",
    category: "Research Paper",
    date: "2026-07-02",
    url: "#"
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

export const ContentResearch: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className={styles.headerArea}>
            <div className={styles.titleRow}>
              <Microscope size={32} weight="thin" />
              <h1>Academic Research</h1>
            </div>
            <p>Threat intelligence models, vectors, memory optimization papers and mitigations.</p>
          </motion.div>
          
          <Divider />
          
          <motion.div layout className={styles.gridContainer}>
            {researchData.map((item, index) => (
              <motion.div
                layout
                key={`research-${item.id}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index}
                className={styles.certCard}
              >
                <div className={styles.cardInfo}>
                  <div className={styles.metaTop}>
                    <div className={styles.dateBadge}>
                      <Clock size={14} />
                      <span>{item.date}</span>
                    </div>
                    <span className={styles.tag}>{item.category}</span>
                  </div>

                  <h3 className={styles.certTitle}>{item.title}</h3>
                  <p className={styles.descText}>{item.desc}</p>

                  <div className={styles.cardFooter}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.verifyBtn}>
                      <span>View PDF / Paper</span>
                      <ArrowSquareOut size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};