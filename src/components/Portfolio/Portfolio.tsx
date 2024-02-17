import styles from "./Portfolio.module.css";

export default function Projects() {
  return (
    <div id='portfolio' className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectsWrapper}>
        <div className={styles.project}>
          <img
            src='./src/assets/projects/threejs-room.png'
            alt='Three.js room'
          />
          <h3>Three.js room</h3>
          <p>3D room made in Three.js</p>
        </div>
        <div className={styles.project}>
          <img src='./src/assets/projects/flashcards.png' alt='Flashcards' />
          <h3>Flashcards</h3>
          <p>Flashcards app using React, Typescript and MySQL</p>
        </div>
        <div className={styles.project}>
          <img
            src='./src/assets/projects/spotify-quiz.png'
            alt='Spotify quiz'
          />
          <h3>Spotify quiz</h3>
          <p>Your top 50 songs quiz using Spotify api and EJS</p>
        </div>
        <div className={styles.project}>
          <img src='./src/assets/projects/weather-app.png' alt='Weather app' />
          <h3>Weather app</h3>
          <p>Weather app in React and Typescript</p>
        </div>
      </div>
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
