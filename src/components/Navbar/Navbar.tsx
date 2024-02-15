import styles from "./Navbar.module.css";
import { useState } from "react";

function handleHref(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  e.preventDefault();
  const target = e.target as HTMLAnchorElement;
  const id = target.href.split("#")[1];
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoListWrapper}>
        <div className={styles.logo}>
          Jakub Kołaczyński<span className={styles.dot}>.</span>
        </div>
        <button onClick={toggleMenu} className={styles.menuButton}>
          {isOpen ? "X" : "☰"}
        </button>
        <ul
          className={`${styles.navLinks} ${
            isOpen ? styles.open : styles.closed
          }`}>
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
