import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Jakub Kołaczyński<span className={styles.dot}>.</span>
      </div>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li className={styles.contact}>Contact</li>
      </ul>
    </nav>
  );
}
