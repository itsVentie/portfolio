import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";
import styles from "@styles/Navbar.module.scss";
import logoImg from "@assets/logo.jpg";

interface NavSubItem {
  href: string;
  i18nKey: string;
  label: string;
}

interface NavItem {
  id: string;
  href: string;
  i18nKey: string;
  label: string;
  children?: NavSubItem[];
}

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationConfig: NavItem[] = [
    {
      id: "home",
      href: "/",
      i18nKey: "nav.home",
      label: "Home",
    },
    {
      id: "about",
      href: "/about",
      i18nKey: "nav.about",
      label: "About",
      children: [
        {
          href: "/about-certs",
          i18nKey: "about.certs",
          label: "Certificates and Qualifications",
        },
        {
          href: "/about-accred",
          i18nKey: "about.accred",
          label: "Accreditations",
        },
        {
          href: "/about-awards",
          i18nKey: "about.awards",
          label: "Awards and Recognition",
        },
      ],
    },
    {
      id: "projects",
      href: "/projects",
      i18nKey: "nav.projects",
      label: "Projects",
      children: [
        {
          href: "/projects-main",
          i18nKey: "projects.main",
          label: "Main Projects (Portfolio)",
        },
        {
          href: "/projects-open",
          i18nKey: "projects.open",
          label: "Open Source / GitHub",
        },
        {
          href: "/projects-freelance",
          i18nKey: "projects.freelance",
          label: "Freelance and Commercial",
        },
      ],
    },
    {
      id: "content",
      href: "/content",
      i18nKey: "nav.content",
      label: "Content / Blog",
      children: [
        { href: "/lyrics", i18nKey: "content.lyrics", label: "Song Lyrics" },
        {
          href: "/articles",
          i18nKey: "content.articles",
          label: "Articles and Tutorials",
        },
        {
          href: "/research",
          i18nKey: "content.research",
          label: "Research Publications",
        },
        {
          href: "/blog",
          i18nKey: "content.blog",
          label: "Personal Blog / Notes",
        },
      ],
    },
    {
      id: "download",
      href: "/download",
      i18nKey: "nav.download",
      label: "Download",
      children: [
        {
          href: "/download-cv",
          i18nKey: "download.cv",
          label: "Download Resume (PDF)",
        },
        {
          href: "/download-code",
          i18nKey: "download.code",
          label: "Files/Code from GitHub",
        },
        {
          href: "/download-assets",
          i18nKey: "download.assets",
          label: "Media/Press Kit",
        },
      ],
    },
    {
      id: "system",
      href: "/system",
      i18nKey: "nav.details",
      label: "System / Details",
      children: [
        {
          href: "https://bio.ventie.dev/system",
          i18nKey: "system.tech",
          label: "Technologies Used",
        },
        {
          href: "https://bio.ventie.dev/system/api",
          i18nKey: "system.api",
          label: "API and Integrations",
        },
        {
          href: "/privacy",
          i18nKey: "system.privacy",
          label: "Privacy Policy",
        },
      ],
    },
  ];

  const handleMouseEnter = (id: string) => setActiveDropdown(id);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className={styles.desktopNav} aria-label="Navigation">
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <img src={logoImg} alt="Logo" />
        </Link>

        <div className={styles.navLinksWrapper}>
          {navigationConfig.map((item) => {
            const isOpen = activeDropdown === item.id;
            const isExternal = item.href.startsWith("http");
            const hasChildren = Boolean(
              item.children && item.children.length > 0,
            );

            return (
              <div
                key={item.id}
                className={styles.dropdown}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {isExternal ? (
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                    {hasChildren && (
                      <CaretDown
                        size={14}
                        weight="bold"
                        className={`${styles.caret} ${isOpen ? styles.caretRotated : ""}`}
                      />
                    )}
                  </a>
                ) : (
                  <Link to={item.href} className={styles.navLink}>
                    {item.label}
                    {hasChildren && (
                      <CaretDown
                        size={14}
                        weight="bold"
                        className={`${styles.caret} ${isOpen ? styles.caretRotated : ""}`}
                      />
                    )}
                  </Link>
                )}

                {hasChildren && item.children && (
                  <div
                    className={`${styles.dropdownContent} ${isOpen ? styles.dropdownVisible : ""}`}
                    aria-labelledby={`nav-${item.id}`}
                  >
                    {item.children.map((subItem) => {
                      const isSubExternal = subItem.href.startsWith("http");
                      return isSubExternal ? (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className={styles.dropdownLink}
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className={styles.dropdownLink}
                        >
                          {subItem.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
