import styles from "./AppsAndOthers.module.css";

export default function Apps() {
  return (
    <div className={styles.apps}>
      <div className={styles.h2ulWrapper}>
        <h2>Applications & others</h2>
        <ul>
          <li>
            Spotify to Youtube playlist converter (
            <a href='https://github.com/Xenko10/spotify-to-youtube-playlist-converter'>
              link
            </a>
            )
          </li>
          <li>
            To do list app in React (
            <a href='https://github.com/Xenko10/todo-app'>link</a>)
          </li>
          <li>
            To do list app in EJS (
            <a href='https://github.com/Xenko10/todo-list-app'>link</a>)
          </li>
        </ul>
      </div>
    </div>
  );
}
