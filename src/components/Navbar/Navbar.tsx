import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Xenko10</div>
      <ul>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>OPINIONS</li>
      </ul>
    </nav>
  );
}
