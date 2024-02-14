import styles from "./Navbar.module.css";
import { useState } from "react";

function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  e.preventDefault();
  const target = e.target as HTMLAnchorElement;
  const id = target.href.split("#")[1];
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logoListWrapper}>
        <div className={styles.logo}>
          Jakub Kołaczyński<span className={styles.dot}>.</span>
        </div>
        <ul>
          <li>
            <a href='#about' onClick={handleClick}>
              About
            </a>
          </li>
          <li>Projects</li>
          <li className={styles.contact}>Contact</li>
        </ul>
        <button
          className={`${styles.hamburger} ${isOpen ? styles.isActive : null}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          <div className={styles.bar}></div>
        </button>
      </div>
    </nav>
  );
}
