import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleHref(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setIsOpen(false);
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
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={styles.menuButton}>
          {isOpen ? "X" : "☰"}
        </button>
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          <li>
            <a href='#about' onClick={handleHref}>
              About
            </a>
          </li>
          <li>
            <a href='#portfolio' onClick={handleHref}>
              Portfolio
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
