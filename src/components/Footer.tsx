import React from "react";
import styles from "@styles/Footer.module.scss";
import logoImg from "@assets/logo.jpg";
import github from "@assets/svg/github.svg";
import telegram from "@assets/svg/telegram.svg";
import linkedin from "@assets/svg/linkedin.svg";
import twitter from "@assets/svg/twitter.svg";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContainer}>
        <div className={`${styles.footerCol} ${styles.aboutCol}`}>
          <div className={styles.logo}>
            <img
              src={logoImg}
              alt=""
              aria-hidden="true"
              className={styles.logoIcon}
            />
          </div>
          <p className={styles.brandDesc}>
            No bureaucracy, no endless departments. Just pure independence,
            personal responsibility, and uncompromising dedication to delivering
            robust infrastructure built from the ground up.
          </p>
          <div
            className={styles.footerSocialLinks}
            aria-label="Social networks"
          >
            <a
              href="https://github.com/ventieRavelle"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub profile"
            >
              <img src={github} alt="" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/ventie"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn profile"
            >
              <img src={linkedin} alt="" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com/itsVentie"
              target="_blank"
              rel="noreferrer"
              title="X (Twitter)"
              aria-label="X profile"
            >
              <img src={twitter} alt="" aria-hidden="true" />
            </a>
            <a
              href="https://t.me/ventie"
              target="_blank"
              rel="noreferrer"
              title="Telegram"
              aria-label="Telegram personal account"
            >
              <img src={telegram} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Navigation</h4>
          <nav aria-label="Secondary site navigation">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/lyrics">Lyrics</a>
            <a href="/download">Downloads</a>
            <a href="/system">Details</a>
          </nav>
        </div>

        <div className={styles.footerCol}>
          <h4>Network</h4>
          <nav aria-label="Community links">
            <a
              href="https://t.me/ventie.dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Main Telegram channel"
            >
              Main Channel
            </a>
            <a
              href="https://t.me/your_dev_channel"
              target="_blank"
              rel="noreferrer"
              aria-label="Development Telegram channel"
            >
              Dev Broadcast
            </a>
            <a
              href="https://t.me/your_art_channel"
              target="_blank"
              rel="noreferrer"
              aria-label="Creative Telegram channel"
            >
              Creative Feed
            </a>
            <a
              href="https://discord.gg/VDbdgjZx5W"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord server"
            >
              Discord HQ
            </a>
          </nav>
        </div>

        <div className={`${styles.footerCol} ${styles.contactCol}`}>
          <h4>Contact</h4>
          <address aria-label="Contact information">
            <p>
              Email:{" "}
              <a href="mailto:VentieRavelle@gmail.com">Ventie@ventie.dev</a>
            </p>
            <p>
              Phone: <a href="tel:+33756915757">+33756915757</a>
            </p>
            <p>Location: Annecy, France</p>
          </address>
        </div>
      </div>

      <div className={styles.footerBottom}>
        &copy; {currentYear} Ventie.dev. All rights reserved.
      </div>
    </footer>
  );
};
