import React from "react";
import { motion } from "framer-motion";
import styles from "@styles/AddedSection.module.scss";
import github from "@assets/svg/github.svg";
import telegram from "@assets/svg/telegram.svg";
import linkedin from "@assets/svg/linkedin.svg";
import twitter from "@assets/svg/twitter.svg";

interface AddedSectionProps {
  variants: any;
  custom: number;
}

export const AddedSection: React.FC<AddedSectionProps> = ({ variants, custom }) => {
  return (
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
          <a href="https://github.com/ventie" target="_blank" rel="noreferrer" aria-label="GitHub">
            <img src={github} alt="GitHub" width="16" height="16" />
          </a>

          <a href="https://x.com/ventie" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
            <img src={twitter} alt="Twitter" width="14" height="14" />
          </a>

          <a href="https://t.me/ventie" target="_blank" rel="noreferrer" aria-label="Telegram">
            <img src={telegram} alt="Telegram" width="15" height="15" />
          </a>

          <a href="https://linkedin.com/in/ventie" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src={linkedin} alt="LinkedIn" width="15" height="15" />
          </a>
        </div>
      </div>

      <div className={styles.policyRow}>
        <span className={styles.policyKey}>Safety</span>
        <p>Strictly anti-malicious. No malware, drainers, or blackhat ops.</p>
      </div>
    </motion.div>
  );
};