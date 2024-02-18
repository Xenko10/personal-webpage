import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectsWrapper}>
        <div className={styles.project}>
          <a href='https://github.com/Xenko10/threejs-room'>
            <img src='./assets/projects/threejs-room.png' alt='Three.js room' />
            <div className={styles.projectInfoWrapper}>
              <h3>Three.js room</h3>
              <p>3D room made in Three.js</p>
            </div>
          </a>
        </div>
        <div className={styles.project}>
          <a href='https://github.com/Xenko10/flashcards-app'>
            <img src='./assets/projects/flashcards.png' alt='Flashcards' />
            <div className={styles.projectInfoWrapper}>
              <h3>Flashcards</h3>
              <p>Flashcards app using React, Typescript and MySQL</p>
            </div>
          </a>
        </div>
        <div className={styles.project}>
          <a href='https://github.com/Xenko10/spotify-quiz'>
            <img src='./assets/projects/spotify-quiz.png' alt='Spotify quiz' />
            <div className={styles.projectInfoWrapper}>
              <h3>Spotify quiz</h3>
              <p>Your top 50 songs quiz using Spotify api and EJS</p>
            </div>
          </a>
        </div>
        <div className={styles.project}>
          <a href='https://github.com/Xenko10/weather-app'>
            <img src='./assets/projects/weather-app.png' alt='Weather app' />
            <div className={styles.projectInfoWrapper}>
              <h3>Weather app</h3>
              <p>Weather app in React and Typescript</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
