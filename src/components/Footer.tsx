import React from "react";
import styles from "@styles/Footer.module.scss";
import logoImg from "@assets/logo.png";
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
              alt="Logo"
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
              href="https://github.com/itsVentie"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <img src={github} alt="GitHub" />
            </a>
            <a
              href="https://linkedin.com/in/ventie"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://twitter.com/itsVentie"
              target="_blank"
              rel="noreferrer"
              aria-label="X profile"
            >
              <img src={twitter} alt="Twitter" />
            </a>
            <a
              href="https://t.me/ventie"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram personal account"
            >
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Navigation</h4>
          <nav aria-label="Secondary site navigation">
            <a href="/">Home</a>
            <a href="/about">Projects</a>
            <a href="/projects">Lyrics</a>
            <a href="/download">Downloads</a>
            <a href="/system">Details</a>
          </nav>
        </div>

        <div className={styles.footerCol}>
          <h4>Network</h4>
          <nav aria-label="Community links">
            <a
              href="https://t.me/ventibloxa"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram channel"
            >
              Main Channel
            </a>
            <a
              href="https://t.me/dfir_lab"
              target="_blank"
              rel="noreferrer"
              aria-label="DFIR lab Telegram channel"
            >
              Dev Broadcast
            </a>
            <a
              href="https://discord.gg/JjcTWnr8rm"
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
              Email: <a href="mailto:ventie@ventie.dev">Ventie@ventie.dev</a>
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