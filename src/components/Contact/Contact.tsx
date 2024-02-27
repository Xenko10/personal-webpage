import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div id='contact' className={styles.contact}>
      <div className={styles.contentWrapper}>
        <h2>Contact</h2>
        <img src='./email.png' alt='contact' />
        <p>You can contact me by pressing button down below!</p>
        <a href='mailto:jakubkolaczynski0@gmail.com'>Contact</a>
      </div>
    </div>
  );
}
