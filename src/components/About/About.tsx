import styles from "./About.module.css";

export default function About() {
  return (
    <div id='about' className={styles.about}>
      <div className={styles.aboutContent}>
        <div>
          <h2>About</h2>
          <p>
            I am an ambitious computer science student who always achieves goals
            without leaving them to the last minute. I compensate for the lack
            of experience with a positive attitude and a willingness to learn.
            You can always rely on me.
          </p>
        </div>
        <img src='./about.jpg' alt='photo of me' />
      </div>
    </div>
  );
}
