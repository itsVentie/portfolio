import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CaretDown, SquaresFour, Translate, Palette } from "@phosphor-icons/react";
import styles from "@styles/Navbar.module.scss";
import logoImg from "@assets/logo.png";

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

interface AppServiceItem {
  href: string;
  label: string;
}

interface ThemeOption {
  id: string;
  label: string;
  colorCode: string;
}

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAppLauncherOpen, setIsAppLauncherOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  
  const [currentTheme, setCurrentTheme] = useState<string>("dark");
  const actionsRef = useRef<HTMLDivElement>(null);


  const themes: ThemeOption[] = [
    { id: "dark", label: "Dark", colorCode: "#09090b" },
    { id: "light", label: "Light", colorCode: "#f8fafc" },
    { id: "purple", label: "Purple", colorCode: "#2e1065" },
    { id: "amber", label: "Amber", colorCode: "#78350f" },
    { id: "slate", label: "Slate", colorCode: "#0f172a" },
  ];

const currentLang = i18n.language.toUpperCase();

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  closeActionMenus(); 
};

  useEffect(() => {
    const root = document.documentElement;
    themes.forEach((t) => root.classList.remove(`theme-${t.id}`));
    root.classList.add(`theme-${currentTheme}`);
  }, [currentTheme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (actionsRef.current && !actionsRef.current.contains(event.target as Node)) {
        setIsAppLauncherOpen(false);
        setIsLangDropdownOpen(false);
        setIsThemeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeActionMenus = () => {
    setIsAppLauncherOpen(false);
    setIsLangDropdownOpen(false);
    setIsThemeDropdownOpen(false);
  };

  const toggleLang = () => {
    setIsAppLauncherOpen(false);
    setIsThemeDropdownOpen(false);
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const toggleTheme = () => {
    setIsAppLauncherOpen(false);
    setIsLangDropdownOpen(false);
    setIsThemeDropdownOpen(!isThemeDropdownOpen);
  };

  const toggleAppLauncher = () => {
    setIsLangDropdownOpen(false);
    setIsThemeDropdownOpen(false);
    setIsAppLauncherOpen(!isAppLauncherOpen);
  };

  const navigationConfig: NavItem[] = [
    { id: "home", href: "/", i18nKey: "nav.home", label: "Home" },
    {
      id: "about",
      href: "/about",
      i18nKey: "nav.about",
      label: "About",
      children: [
        { href: "/about-certs", i18nKey: "about.certs", label: "Certificates and Qualifications" },
        { href: "/about-accred", i18nKey: "about.accred", label: "Accreditations" },
        { href: "/about-awards", i18nKey: "about.awards", label: "Awards and Recognition" },
      ],
    },
    {
      id: "projects",
      href: "/projects",
      i18nKey: "nav.projects",
      label: "Projects",
      children: [
        { href: "/projects-main", i18nKey: "projects.main", label: "Main Projects (Portfolio)" },
        { href: "/projects-open", i18nKey: "projects.open", label: "Open Source / GitHub" },
        { href: "/projects-freelance", i18nKey: "projects.freelance", label: "Freelance and Commercial" },
      ],
    },
    {
      id: "content",
      href: "/content",
      i18nKey: "nav.content",
      label: "Content / Blog",
      children: [
        { href: "/writeups", i18nKey: "content.writeups", label: "Writeups" },
        { href: "/articles", i18nKey: "content.articles", label: "Articles and Tutorials" },
        { href: "/research", i18nKey: "content.research", label: "Research Publications" },
        { href: "/blog", i18nKey: "content.blog", label: "Personal Blog / Notes" },
      ],
    },
    {
      id: "download",
      href: "/download",
      i18nKey: "nav.download",
      label: "Download",
      children: [
        { href: "/download-cv", i18nKey: "download.cv", label: "Download Resume (PDF)" },
        { href: "/download-code", i18nKey: "download.code", label: "Files/Code from GitHub" },
        { href: "/download-assets", i18nKey: "download.assets", label: "Media/Press Kit" },
      ],
    },
    {
      id: "system",
      href: "/system",
      i18nKey: "nav.details",
      label: "System / Details",
      children: [
        { href: "https://bio.ventie.dev/system", i18nKey: "system.tech", label: "Technologies Used" },
        { href: "https://bio.ventie.dev/system/api", i18nKey: "system.api", label: "API and Integrations" },
        { href: "/privacy", i18nKey: "system.privacy", label: "Privacy Policy" },
      ],
    },
  ];

  const appLauncherConfig: AppServiceItem[] = [
    { href: "https://liora.ventie.dev", label: "Liora" },
    { href: "https://chessview.cc", label: "ChessView" },
    { href: "https://inkspire.ventie.dev", label: "Inkspire" },
    { href: "https://richter.ventie.dev", label: "Richter" },
    { href: "https://ava.ventie.dev", label: "A.V.A" },
  ];

  return (

    <nav className={styles.desktopNav} aria-label="Navigation">
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <img src={logoImg} alt="Logo" />
        </Link>

        <div className={styles.navLinksWrapper}>
          {navigationConfig.map((item) => (
            <div
              key={item.id}
              className={styles.dropdown}
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to={item.href} className={styles.navLink} onClick={() => setActiveDropdown(null)}>
                <span>{t(item.i18nKey)}</span>
                {item.children && (
                  <CaretDown size={14} weight="bold" className={`${styles.caret} ${activeDropdown === item.id ? styles.caretRotated : ""}`} />
                )}
              </Link>

              {item.children && (
                <div className={`${styles.dropdownContent} ${activeDropdown === item.id ? styles.dropdownVisible : ""}`}>
                  {item.children.map((subItem) => (
                    <Link key={subItem.href} to={subItem.href} className={styles.dropdownLink}>
                      {t(subItem.i18nKey)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.navActions} ref={actionsRef}>
         <div className={styles.actionDropdownWrapper}>
  <button 
    className={`${styles.actionBtn} ${isLangDropdownOpen ? styles.actionBtnActive : ""}`} 
    onClick={toggleLang}
  >
    <Translate size={20} weight="bold" />
    <span className={styles.actionBtnText}>{currentLang}</span>
  </button>
  
  <div className={`${styles.actionDropdownContent} ${isLangDropdownOpen ? styles.actionDropdownVisible : ""}`}>
    <button 
      onClick={() => changeLanguage("en")} 
      className={i18n.language === "en" ? styles.activeSubLink : ""}
    >
      English
    </button>
    <button 
      onClick={() => changeLanguage("ru")} 
      className={i18n.language === "ru" ? styles.activeSubLink : ""}
    >
      Русский
    </button>
  </div>
</div>

          <div className={styles.actionDropdownWrapper}>
            <button 
              className={`${styles.actionBtn} ${isThemeDropdownOpen ? styles.actionBtnActive : ""}`} 
              aria-label="Theme Selector"
              onClick={toggleTheme}
            >
              <Palette size={20} weight="bold" />
            </button>
            <div className={`${styles.actionDropdownContent} ${isThemeDropdownOpen ? styles.actionDropdownVisible : ""}`}>
              {themes.map((t) => (
                <button 
                  key={t.id} 
                  onClick={() => { setCurrentTheme(t.id); closeActionMenus(); }}
                  className={currentTheme === t.id ? styles.activeSubLink : ""}
                >
                  <span className={styles.themeIndicator} style={{ backgroundColor: t.colorCode }} />
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.appLauncherContainer}>
            <button 
              className={`${styles.appLauncherBtn} ${isAppLauncherOpen ? styles.appLauncherBtnActive : ""}`}
              aria-label="Toggle Apps Menu"
              onClick={toggleAppLauncher}
            >
              <SquaresFour size={22} weight="bold" />
            </button>

            <div className={`${styles.appLauncherContent} ${isAppLauncherOpen ? styles.appLauncherVisible : ""}`}>
              {appLauncherConfig.map((app) => (
                <a 
                  key={app.href} 
                  href={app.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={styles.appLauncherLink}
                  onClick={closeActionMenus}
                >
                  {app.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};