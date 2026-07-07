import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, DotsThree } from "@phosphor-icons/react";
import styles from "@styles/AddedSection.module.scss";
import github from "@assets/svg/github.svg";
import telegram from "@assets/svg/telegram.svg";
import linkedin from "@assets/svg/linkedin.svg";
import twitter from "@assets/svg/twitter.svg";
import tryhackme from "@assets/svg/tryhackme.svg";
import hackthebox from "@assets/svg/hackthebox.svg";
import reddit from "@assets/svg/reddit.svg";
import instagram from "@assets/svg/instagram.svg";
import vk from "@assets/svg/vk.svg";
import dailydev from "@assets/svg/dailydev.svg";
import peerlist from "@assets/svg/peerlist.svg";

interface AddedSectionProps {
  variants: any;
  custom: number;
}

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  songUrl: string;
  albumArt: string;
}

export const AddedSection: React.FC<AddedSectionProps> = ({ variants, custom }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spotify, setSpotify] = useState<SpotifyData>({
    isPlaying: false,
    title: "",
    artist: "",
    songUrl: "",
    albumArt: "",
  });

  const DISCORD_ID = "939851605111631903"; 

  useEffect(() => {
    const checkSpotify = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const data = await res.json();
        
        if (data?.success && data?.data?.listening_to_spotify) {
          const spotifyInfo = data.data.spotify;
          setSpotify({
            isPlaying: true,
            title: spotifyInfo.track,
            artist: spotifyInfo.artist,
            songUrl: `https://open.spotify.com/track/${spotifyInfo.track_id}`,
            albumArt: spotifyInfo.album_art_url,
          });
        } else {
          setSpotify((prev) => ({ ...prev, isPlaying: false }));
        }
      } catch (err) {
        console.error("Lanyard API Error:", err);
      }
    };

    checkSpotify();
    const interval = setInterval(checkSpotify, 3000); 
    return () => clearInterval(interval);
  }, []);

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } }
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const socialsContent = (
    <div className={styles.socialLinks}>
      <a href="https://github.com/itsventie" target="_blank" rel="noreferrer" aria-label="GitHub">
        <img src={github} alt="GitHub" />
      </a>

      <a href="https://x.com/itsventie" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
        <img src={twitter} alt="Twitter" />
      </a>

      <a href="https://t.me/itsventie" target="_blank" rel="noreferrer" aria-label="Telegram">
        <img src={telegram} alt="Telegram" />
      </a>

      <a href="https://linkedin.com/in/ventie" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <img src={linkedin} alt="LinkedIn" />
      </a>

      <a href="https://www.tryhackme.com/p/ventie" target="_blank" rel="noreferrer" aria-label="TryHackMe">
        <img src={tryhackme} alt="TryHackMe" />
      </a>

      <a href="hhttps://profile.hackthebox.com/profile/019c3742-352f-72cc-bd8c-981071553017" target="_blank" rel="noreferrer" aria-label="HackTheBox">
        <img src={hackthebox} alt="HackTheBox" />
      </a>

      <a href="https://instagram.com/itsventie" target="_blank" rel="noreferrer" aria-label="Instagram">
        <img src={instagram} alt="Instagram" />
      </a>

      <a href="https://vk.com/ventie" target="_blank" rel="noreferrer" aria-label="VK">
        <img src={vk} alt="VK" />
      </a>

      <a href="https://www.reddit.com/user/Vyntiq" target="_blank" rel="noreferrer" aria-label="Reddit">
        <img src={reddit} alt="Reddit" />
      </a>

      <a href="https://daily.dev/ventie" target="_blank" rel="noreferrer" aria-label="Dailydev">
        <img src={dailydev} alt="dailydev" />
      </a>

      <a href="https://peerlist.io/ventie" target="_blank" rel="noreferrer" aria-label="Peerlist">
        <img src={peerlist} alt="Peerlist" />
        </a>
    </div>
  );

  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={custom}
        className={styles.policySection}
      >
        <div className={styles.policyRow}>
          <span className={styles.policyKey}>Socials</span>
          <div className={styles.socialLinks}>
            <a href="https://github.com/itsventie" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src={github} alt="GitHub" />
            </a>

            <a href="https://x.com/itsventie" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <img src={twitter} alt="Twitter" />
            </a>

            <a href="https://t.me/itsventie" target="_blank" rel="noreferrer" aria-label="Telegram">
              <img src={telegram} alt="Telegram" />
            </a>

            <button 
              className={styles.openModalBtn} 
              onClick={() => setIsModalOpen(true)}
              aria-label="Open Socials Modals"
            >
              <DotsThree size={24} weight="bold" />
            </button>
          </div>
        </div>

        <div className={styles.policyRow}>
          <span className={styles.policyKey}>Listening</span>
          {spotify.isPlaying ? (
            <a 
              href={spotify.songUrl} 
              target="_blank" 
              rel="noreferrer" 
              className={styles.spotifyTrack}
            >
              <div className={styles.albumArtWrapper}>
                <img src={spotify.albumArt} alt="Album Art" className={styles.albumArt} />
                <div className={styles.equalizerOverlay}>
                  <span></span><span></span><span></span>
                </div>
              </div>
              <span className={styles.trackName}>
                {spotify.title} — {spotify.artist}
              </span>
            </a>
          ) : (
            <div className={`${styles.spotifyTrack} ${styles.offline}`}>
              <span className={styles.trackName}>Offline — Not Listening</span>
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className={styles.modalOverlay}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className={styles.modalContent}
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3>Social Networks</h3>
                <button className={styles.closeModalBtn} onClick={() => setIsModalOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className={styles.modalBody}>
                {socialsContent}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};