import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  Rss,
  Newspaper,
  MusicNotes,
  FileText,
  Microscope,
  ArrowSquareOut,
} from "@phosphor-icons/react";

import styles from "@styles/Content/Content.module.scss";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";

interface HubCardConfig {
  id: string;
  title: string;
  desc: string;
  href: string;
  icon: React.ComponentType<any>;
  countLabel?: string;
}

const hubSections: HubCardConfig[] = [
  {
    id: "blog",
    title: "Personal Blog & Notes",
    desc: "Thoughts, active directory labs documentation, and CTF challenges writeups.",
    href: "/blog",
    icon: Newspaper,
  },
  {
    id: "articles",
    title: "Technical Articles",
    desc: "Deep-dives, infrastructure tutorials and cyber security analytics.",
    href: "/articles",
    icon: FileText,
  },
  {
    id: "research",
    title: "Academic Research",
    desc: "Threat intelligence models, vectors, memory optimization papers and mitigations.",
    href: "/research",
    icon: Microscope,
  },
  {
    id: "lyrics",
    title: "Lyrics Translations",
    desc: "Artistic and context-precise translations with structural language annotations.",
    href: "/lyrics",
    icon: MusicNotes,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: custom * 0.1 },
  }),
};

export const Content: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className={styles.headerArea}
          >
            <div className={styles.titleRow}>
              <Rss size={32} weight="thin" />
              <h1>Content Hub</h1>
            </div>
            <p>
              Security research, standalone tech articles, notes, CTF writeups and lyrics translations.
            </p>
          </motion.div>

          <Divider />

          <motion.div layout className={styles.gridContainer}>
            {hubSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={index + 1}
                  className={styles.certCard}
                >
                  <div className={styles.cardInfo}>
                    <div className={styles.metaTop}>
                      <div className={styles.dateBadge}>
                        <Icon size={14} />
                        <span>Category</span>
                      </div>
                    </div>

                    <h3 className={styles.certTitle}>{section.title}</h3>
                    <p className={styles.descText}>{section.desc}</p>

                    <div className={styles.cardFooter}>
                      <Link to={section.href} className={styles.verifyBtn}>
                        <span>Explore Directory</span>
                        <ArrowSquareOut size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};