import styles from "./Navbar.module.css";

function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  e.preventDefault();
  const target = e.target as HTMLAnchorElement;
  const id = target.href.split("#")[1];
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoListWrapper}>
        <div className={styles.logo}>
          <a href='#hero' onClick={handleClick}>
            Jakub Kołaczyński<span className={styles.dot}>.</span>
          </a>
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
      </div>
    </nav>
  );
}
