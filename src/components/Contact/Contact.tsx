import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div id='contact' className={styles.contact}>
      <img src='./src/assets/email.png' alt='contact' />
      <p>You can contact me by pressing button down below!</p>
      <a href='mailto:jakubkolaczynski0@gmail.com'>Contact</a>
    </div>
  );
}
