import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.websitesWrapper}>
        <a href='https://github.com/Xenko10'>
          <img src='./icons/github.png' alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/jakub-ko%C5%82aczy%C5%84ski-6027b4293//'>
          <img src='./icons/linkedin.png' alt='linkedin' />
        </a>
        <a href='mailto:jakubkolaczynski0@gmail.com'>
          <img src='./icons/gmail.png' alt='gmail' />
        </a>
      </div>
      <div>
        <hr />© {new Date().getFullYear()} created by&nbsp;
        <a href='https://jakub-kolaczynski.vercel.app/'>Jakub Kołaczyński</a>
      </div>
    </footer>
  );
}
