import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.contentWrapper}>
        <h2>Projects</h2>
        <div className={styles.projectsWrapper}>
          <div className={styles.project}>
            <a href='https://github.com/Xenko10/threejs-room'>
              <img src='./projects/threejs-room.png' alt='Three.js room' />
              <div className={styles.projectInfo}>
                <h3>Three.js room</h3>
                <p>3D room made in Three.js</p>
              </div>
            </a>
          </div>
          <div className={styles.project}>
            <a href='https://github.com/Xenko10/flashcards-app'>
              <img src='./projects/flashcards.png' alt='Flashcards' />
              <div className={styles.projectInfo}>
                <h3>Flashcards</h3>
                <p>Flashcards app using React, TypeScript and MySQL</p>
              </div>
            </a>
          </div>
          <div className={styles.project}>
            <a href='https://github.com/Xenko10/spotify-quiz'>
              <img src='./projects/spotify-quiz.png' alt='Spotify quiz' />
              <div className={styles.projectInfo}>
                <h3>Spotify quiz</h3>
                <p>Your top 50 songs quiz using Spotify API and EJS</p>
              </div>
            </a>
          </div>
          <div className={styles.project}>
            <a href='https://github.com/Xenko10/weather-app'>
              <img src='./projects/weather-app.png' alt='Weather app' />
              <div className={styles.projectInfo}>
                <h3>Weather app</h3>
                <p>Weather app in React and TypeScript</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
