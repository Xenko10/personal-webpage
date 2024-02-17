import styles from "./AppsAndOthers.module.css";

export default function Apps() {
  return (
    <div className={styles.apps}>
      <h2>Applications & others</h2>
      <ul>
        <li>
          <b>Spotify to Youtube playlist converter</b> (
          <a href='https://github.com/Xenko10/spotify-to-youtube-playlist-converter'>
            link
          </a>
          )
        </li>
        <li>
          <b>To do list app in React</b> (
          <a href='https://github.com/Xenko10/todo-app'>link</a>)
        </li>
        <li>
          <b>To do list app in EJS</b> (
          <a href='https://github.com/Xenko10/todo-list-app'>link</a>)
        </li>
      </ul>
    </div>
  );
}
