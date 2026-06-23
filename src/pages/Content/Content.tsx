import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Newspaper,
  Rss,
  BookOpen,
  Globe,
  X,
  Tag,
  Clock,
} from "@phosphor-icons/react";

import styles from "@styles/Content/Content.module.scss";
import { Footer } from "../../components/Footer";

const posts = [
  {
    id: 1,
    title: "OSINT Pipeline Breakdown",
    desc: "How I structure OSINT workflows for DFIR cases.",
    tag: "DFIR",
    date: "2026-06-20",
  },
  {
    id: 2,
    title: "Reverse Engineering Notes",
    desc: "Static analysis workflow for unknown binaries.",
    tag: "RE",
    date: "2026-06-18",
  },
];

const writeups = [
  {
    id: 1,
    title: "TryHackMe: PrivEsc path",
    level: "Medium",
    date: "2026-06-10",
  },
  {
    id: 2,
    title: "HTB: Linux foothold chain",
    level: "Hard",
    date: "2026-06-02",
  },
];

const channels = [
  {
    id: 1,
    name: "Security Notes",
    url: "https://t.me/example",
    desc: "DFIR / OSINT / Reverse Engineering",
  },
  {
    id: 2,
    name: "Dev Log",
    url: "https://github.com/example",
    desc: "Projects & experiments",
  },
];

const news = [
  {
    id: 1,
    title: "New DFIR toolkit released",
    source: "Community Feed",
    date: "2026-06-21",
  },
  {
    id: 2,
    title: "CVE trend analysis 2026",
    source: "CyberSec News",
    date: "2026-06-19",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export const Content: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "posts" | "writeups" | "channels" | "news"
  >("posts");

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className={styles.heroHeader}
        >
          <div className={styles.titleRow}>
            <Rss size={20} />
            <h1>Content Hub</h1>
          </div>
          <p>Posts, writeups, channels and security research updates</p>
        </motion.div>

        <div className={styles.tabs}>
          {[
            { key: "posts", label: "Posts", icon: Newspaper },
            { key: "writeups", label: "Writeups", icon: BookOpen },
            { key: "channels", label: "Channels", icon: Globe },
            { key: "news", label: "News", icon: Tag },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                className={`${styles.tabBtn} ${
                  activeTab === tab.key ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab(tab.key as any)}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className={styles.grid}>
          <AnimatePresence mode="wait">
            {activeTab === "posts" && (
              <motion.div
                key="posts"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.section}
              >
                {posts.map((p, i) => (
                  <motion.div
                    key={p.id}
                    className={styles.card}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className={styles.cardTop}>
                      <span className={styles.tag}>{p.tag}</span>
                      <span className={styles.date}>
                        <Clock size={14} /> {p.date}
                      </span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "writeups" && (
              <motion.div
                key="writeups"
                className={styles.section}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {writeups.map((w, i) => (
                  <motion.div
                    key={w.id}
                    className={styles.card}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className={styles.cardTop}>
                      <span className={styles.tag}>{w.level}</span>
                      <span className={styles.date}>{w.date}</span>
                    </div>
                    <h3>{w.title}</h3>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "channels" && (
              <motion.div
                key="channels"
                className={styles.section}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {channels.map((c, i) => (
                  <motion.a
                    key={c.id}
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.cardLink}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                  >
                    <h3>{c.name}</h3>
                    <p>{c.desc}</p>
                  </motion.a>
                ))}
              </motion.div>
            )}

            {activeTab === "news" && (
              <motion.div
                key="news"
                className={styles.section}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {news.map((n, i) => (
                  <motion.div
                    key={n.id}
                    className={styles.card}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className={styles.cardTop}>
                      <span className={styles.tag}>{n.source}</span>
                      <span className={styles.date}>{n.date}</span>
                    </div>
                    <h3>{n.title}</h3>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};