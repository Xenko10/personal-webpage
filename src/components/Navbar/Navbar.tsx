import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleHref(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    toggleMenu();
    const target = e.target as HTMLAnchorElement;
    const id = target.href.split("#")[1];
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.logoListWrapper}>
        <div className={styles.logo}>
          Jakub Kołaczyński<span className={styles.dot}>.</span>
        </div>
        <button onClick={toggleMenu} className={styles.menuButton}>
          {isOpen ? "X" : "☰"}
        </button>
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : null}`}>
          <li>
            <a href='#about' onClick={handleHref}>
              About
            </a>
          </li>
          <li>
            <a href='#projects' onClick={handleHref}>
              Projects
            </a>
          </li>
          <li className={styles.contact}>
            <a href='#contact' onClick={handleHref}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
