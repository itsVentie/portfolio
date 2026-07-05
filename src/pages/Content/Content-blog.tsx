import React from "react";
import { motion, type Variants } from "framer-motion";
import { Newspaper, TelegramLogo, DiscordLogo, ArrowSquareOut, ChatTeardropDots } from "@phosphor-icons/react";
import styles from "@styles/Content/Content-blog.module.scss";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";
import NyaNya from "@assets/content/channels/NyaNya.jpg";
import Nirvana from "@assets/content/channels/Nirvana.jpg";

interface ChannelItem {
  id: number;
  title: string;
  username: string;
  url: string;
  desc: string;
  type: "telegram" | "discord";
  isChat?: boolean;
  avatarSrc: string;
}

const channelsData: ChannelItem[] = [
  {
    id: 1,
    title: "Ня ня",
    username: "Ventibloxa",
    url: "https://t.me/Ventibloxa",
    desc: "Latest news and insights.",
    type: "telegram",
    avatarSrc: NyaNya
  },
  {
    id: 2,
    title: "DFIR Lab",
    username: "dfir_lab",
    url: "https://t.me/dfir_lab",
    desc: "Digital Forensics, Incident Response, threat intelligence pipelines and analysis.",
    type: "telegram",
    avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9kUAyOAzNbW2zmFc1Bp3BreZM7T00yv2TXGONWWKxw&s=10"
  },
  {
    id: 3,
    title: "Наука Ода",
    username: "nauka_oda",
    url: "https://t.me/nauka_oda",
    desc: "Академические изыскания, исследования и заметки о фундаментальной науке.",
    type: "telegram",
    avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvldM5e20Oj0e8xnuis6Tt9WS2O5-ZI9_uzlbUyrbWjw&s=10"
  },
  {
    id: 4,
    title: "HQ Community",
    username: "discord",
    url: "https://discord.gg/your-invite-link",
    desc: "Основной координационный центр, закрытые обсуждения и обмен опытом в реальном времени.",
    type: "discord",
    avatarSrc: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=150",
    isChat: true
  },
  {
    id: 5,
    title: "Nirvana",
    username: "NirvanaFlow",
    url: "https://t.me/NirvanaFlow",
    desc: "The main chat.",
    type: "telegram",
    avatarSrc: Nirvana,
    isChat: true
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

export const ContentBlog: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className={styles.headerArea}>
            <div className={styles.titleRow}>
              <Newspaper size={32} weight="thin" />
              <h1>Blogs & Communities</h1>
            </div>
            <p>Actual longreads, incident analysis, and official broadcasting platforms.</p>
          </motion.div>
          
          <Divider />
          
          <motion.div layout className={styles.gridContainer}>
            {channelsData.map((channel, index) => (
              <motion.div
                layout
                key={`channel-${channel.id}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index}
                className={`${styles.certCard} ${styles[channel.type]}`}
              >
                <div className={styles.cardInfo}>
                  <div className={styles.metaTop}>
                    <div className={styles.avatarContainer}>
                      <img src={channel.avatarSrc} alt={channel.title} className={styles.channelAvatar} />
                      <div className={styles.typeIconBadge}>
                        {channel.isChat ? (
                          <ChatTeardropDots size={16} weight="fill" />
                        ) : channel.type === "telegram" ? (
                          <TelegramLogo size={16} weight="fill" />
                        ) : (
                          <DiscordLogo size={16} weight="fill" />
                        )}
                      </div>
                    </div>
                    <div className={styles.platformBadge}>
                      <span>{channel.isChat ? "CHAT" : "CHANNEL"}</span>
                    </div>
                  </div>

                  <h3 className={styles.certTitle}>{channel.title}</h3>
                  <p className={styles.descText}>{channel.desc}</p>

                  <div className={styles.cardFooter}>
                    <a href={channel.url} target="_blank" rel="noopener noreferrer" className={styles.verifyBtn}>
                      <span>Join</span>
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