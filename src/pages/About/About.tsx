import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CaretDown,
  X,
  Image as ImageIcon,
  FilmStrip,
  Brain,
  Code,
  Translate,
  GameController,
  Desktop,
  ShieldCheck,
  Globe
} from "@phosphor-icons/react";
import { FR, RU, UA, GB, ES } from "country-flag-icons/react/3x2";
import { Footer } from "../../components/Footer";
import { AddedSection } from "@/components/AddedSection";
import styles from "@styles/About/About.module.scss";

import { useAvatarManager } from "../../components/avatars/useAvatarManager";
import { photosData, gifsData } from "../../components/avatars/avatars.config";

export const About: React.FC = () => {
  const [isAkaOpen, setIsAkaOpen] = useState(false);
 const CryptoItem: React.FC<{ label: string; address: string }> = ({
  label,
  address,
}) => {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(address);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

    return (
     <div className={styles.cryptoItem}>
      <button
        type="button"
        className={styles.cryptoHeader}
        onClick={() => setOpened(!opened)}
      >
        <span className={styles.cryptoLabel}>{label}</span>

        <span className={styles.cryptoArrow}>
          {opened ? "▲" : "▼"}
        </span>
      </button>

      {opened && (
        <div className={styles.cryptoContent}>
          <code className={styles.cryptoAddress}>
            {address}
          </code>

          <button
            type="button"
            className={styles.copyButton}
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
};

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
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.8, 0.2, 1],
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
                  DevSecOps // DFIR // Purple Team
                </div>

                <div className={styles.badge}>Independent Researcher</div>
              </div>
            </motion.div>

            <AddedSection variants={fadeUp} custom={2} />
            </div>

       <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  custom={2}
  className={styles.bentoGrid}
>
  <div className={`${styles.bentoCard} ${styles.colSpan2}`}>
    <div className={styles.cardHeader}>
      <Code size={18} weight="regular" />
      <span className={styles.cardTitle}>GitHub Activity</span>
    </div>
    <div className={styles.githubContainer}>
      <div className={styles.githubMain}>
        <img
          src="https://github.com/itsventie.png"
          alt="itsventie GitHub Avatar"
          className={styles.githubAvatar}
        />
        <img
          src="https://github-readme-stats-one.vercel.app/api?username=itsventie&show_icons=true&theme=dark&hide_border=true&bg_color=121214&title_color=8b5cf6&icon_color=8b5cf6&text_color=d4d4d8"
          alt="itsventie GitHub Stats"
          className={styles.githubStatsImg}
        />
      </div>
      <img
        src="https://github-readme-stats-one.vercel.app/api/top-langs/?username=itsventie&layout=compact&theme=dark&hide_border=true&bg_color=121214&title_color=8b5cf6&text_color=d4d4d8"
        alt="Top Languages"
        className={styles.githubLangsImg}
      />
    </div>
  </div>

           <div className={styles.bentoCard}>
  <div className={styles.cardHeader}>
    <Brain size={18} weight="regular" />
    <span className={styles.cardTitle}>Psychological Profile</span>
  </div>
  
  <div className={styles.mbtiWrapper}>
    <div className={styles.mbtiInfo}>
      <span className={styles.mbtiType}>INFJ-T</span>
      <span className={styles.mbtiLabel}>Advocate</span>
      <div className={styles.enneaBlock}>
        <span className={styles.enneaValue}>4w5</span>
        <span className={styles.enneaLabel}>Free Spirit</span>
      </div>
    </div>
    <div className={styles.mbtiBadges}>
      <img
        src="https://img.shields.io/badge/MBTI-INFJ--T-8b5cf6?style=for-the-badge&logo=psychology&logoColor=white"
        alt="INFJ-T"
        className={styles.badgeImg}
      />
      <img
        src="https://img.shields.io/badge/Enneagram-4w5-3b82f6?style=for-the-badge&logo=infinity&logoColor=white"
        alt="4w5"
        className={styles.badgeImg}
      />
    </div>
  </div>

  <div className={styles.cognitiveStack}>
    <span className={styles.stackLabel}>Cognitive Functions</span>
    <div className={styles.functions}>
      <span className={styles.func}>Ni</span>
      <span className={styles.func}>Fe</span>
      <span className={styles.func}>Ti</span>
      <span className={styles.func}>Se</span>
    </div>
  </div>

  <div className={styles.strategicTraits}>
    <div className={styles.traitRow}>
      <span className={styles.traitName}>Analytical Focus</span>
      <span className={styles.traitValue}>DFIR & OSINT</span>
    </div>
    <div className={styles.traitRow}>
      <span className={styles.traitName}>Strategic Vision</span>
      <span className={styles.traitValue}>Chess 2300+ Elo</span>
    </div>
  </div>

  <div className={styles.temperamentLine}>Melancholic - Choleric</div>
</div>

            <div className={styles.bentoCard}>
              <div className={styles.cardHeader}>
                <Desktop size={18} weight="regular" />
                <span className={styles.cardTitle}>Development Stack</span>
              </div>
              <div className={styles.stackList}>
                <div className={styles.stackItem}>
                  <strong>Low-Level:</strong> Go, C++, C, Rust, C#
                </div>
                <div className={styles.stackItem}>
                  <strong>Web & Cloud:</strong> React, Next.js, AWS, Docker
                </div>
                <div className={styles.stackItem}>
                  <strong>Environment:</strong> RHEL, Arch, Tor, VeraCrypt
                </div>
              </div>
              <div className={styles.skillIcons}>
                <img src="https://skillicons.dev/icons?i=go,cpp,rust,react,docker,linux&theme=dark" alt="Skills" />
              </div>
            </div>

   <div className={styles.bentoCard}>
  <div className={styles.cardHeader}>
    <ShieldCheck size={18} weight="regular" />
    <span className={styles.cardTitle}>Security & Labs</span>
  </div>

  <div className={styles.stackList}>
    <div className={styles.stackItem}>
      <strong>Focus:</strong> Vulnerability Research, Cryptography, OSINT, Csint, Sherlock
    </div>
  </div>

  <div className={styles.securityPlatforms}>
    <a
      href="https://tryhackme.com/p/ventie"
      target="_blank"
      rel="noreferrer"
      className={styles.platformCard}
    >
      <img
        src="https://cdn.simpleicons.org/tryhackme"
        alt="TryHackMe"
      />
      <span>TryHackMe</span>
    </a>

    <a
      href="https://app.hackthebox.com/profile/2519629"
      target="_blank"
      rel="noreferrer"
      className={styles.platformCard}
    >
      <img
        src="https://cdn.simpleicons.org/hackthebox"
        alt="Hack The Box"
      />
      <span>Hack The Box</span>
    </a>
  </div>
</div>
           <div className={`${styles.bentoCard} ${styles.colSpan2}`}>
  <div className={styles.cardHeader}>
    <GameController size={18} weight="regular" />
    <span className={styles.cardTitle}>Gaming & Strategy</span>
  </div>
  
  <div className={styles.gamingGrid}>
    <div className={styles.gamingSection}>
     <div className={styles.steamCardWrapper}>
  <a
    href="https://steamcommunity.com/id/vyntiq"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="https://card.yuy1n.io/card/76561199865859143?theme=github-dark&lang=en"
      alt="Steam Playtime"
    />
  </a>
</div>
      <div className={styles.gameTags}>
        <span>Counter-Strike 2</span>
        <span>Honkai: Star Rail</span>
        <span>Cyberpunk 2077</span>
        <span>Resident Evil</span>
      </div>
    </div>
    
    <div className={styles.strategySection}>
      <div className={styles.chessWrapper}>
        <a href="https://www.chess.com/member/vintiq" target="_blank" rel="noreferrer">
          <img
            src="https://chess-stats-card.vercel.app/api/card?user=Vintiq&theme=ocean_dark"
            alt="Chess Stats"
            className={styles.chessImg}
          />
        </a>
      </div>
      <div className={styles.shogiRank}>
        <span>Shogi Rank</span>
        <strong>5 Kyu</strong>
        <span>Go <strong>1 Dan</strong></span>
      </div>
    </div>
  </div>
</div>

            <div className={styles.bentoCard}>
              <div className={styles.cardHeader}>
                <Translate size={18} weight="regular" />
                <span className={styles.cardTitle}>Languages</span>
              </div>
              <div className={styles.languageList}>
                <div className={styles.langItem}>
                  <RU className={styles.flagIcon} /> <span>Russian (Native)</span>
                </div>
                <div className={styles.langItem}>
                  <UA className={styles.flagIcon} /> <span>Ukrainian (C1/C2)</span>
                </div>
                <div className={styles.langItem}>
                  <GB className={styles.flagIcon} /> <span>English (C1)</span>
                </div>
                <div className={styles.langItem}>
                  <FR className={styles.flagIcon} /> <span>French (B1)</span>
                </div>
                <div className={styles.langItem}>
                  <ES className={styles.flagIcon} /> <span>Spanish (A2)</span>
                </div>
              </div>
            </div>

            <div className={styles.bentoCard}>
  <div className={styles.cardHeader}>
    <Globe size={18} weight="regular" />
    <span className={styles.cardTitle}>Contact & Infrastructure</span>
  </div>
  <div className={styles.contactInfo}>
    <div className={styles.contactRow}>
      <span>Location:</span>
      <span className={styles.value}>France / CET</span>
    </div>
    <div className={styles.contactRow}>
      <span>Email:</span>
      <a href="mailto:contact@ventie.dev" className={styles.value}>contact@ventie.dev</a>
    </div>
    <div className={styles.contactRow}>
      <span>Phone:</span>
      <a href="tel:+33756915757" className={styles.value}>+33 7 56 91 57 57</a>
    </div>
    <div className={styles.cryptoSection}>
  <CryptoItem
    label="Cardano (ADA)"
    address="addr1qyu03p6enhnf0p38m9qxr4gncczcs09teev4j06sdm872cfclzr4n80xj7rz0k2qv82383s93q72hnjetyl4qmk0u4ssv5se46"
  />

  <CryptoItem
    label="Bitcoin (BTC)"
    address="bc1qxdfhlt5fq0jdz4dv562kchzl5tu56x4t0g26hh"
  />

  <CryptoItem
    label="Ethereum (ETH)"
    address="0x2b19c13CcE3cB291325dD5FBB1eC4a1c44A494bA"
  />

  <CryptoItem
    label="Litecoin (LTC)"
    address="LdPWmxBe6wFzvsc5qZ2F3ba2cfTHThdAuX"
  />

  <CryptoItem
    label="XRP"
    address="rB6Rtm9k1ZbuoPWNvGMzeW7CZNyiPFgNZc"
  />

  <CryptoItem
    label="TONCOIN"
    address="UQCMD8SCpTLqUlvWIQXYm3GCXmd1cXU7UdZYjzl6zhifL8eO"
  />
</div>
  </div>
</div>
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