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
      </ul>
    </div>
  );
}
