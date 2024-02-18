import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.description}>
        <h1 className={styles.title}>Hi, I am Jakub.</h1>
        <p className={styles.subtitle}>Frontend Developer</p>
      </div>
      <img src='./hero.png' alt='frontend developer' />
    </div>
  );
}
