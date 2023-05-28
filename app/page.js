import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Goals dashboard 2023</p>
        <div>
          By <span>deeps.site</span>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.title}>I deserve to be the creator of a knowledge enhancing app used by 10 millions people monthly by 30th June, 2023</div>
        <div className={styles.title}>I deserve to have 6 pack abs and maintain a healthy lean fit body by 2023 July</div>
        <div className={styles.title}>I got a 15 LPA package at medium sized tech company with hybrid policy working as software engineer by 2023 May Mid ✔️</div>
      </div>

      <div className={styles.grid}>
        <a className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>Read Mahabharata</h2>
          <p>Because it has timeless values</p>
        </a>

        <a className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>Write weekly 1 blog</h2>
          <p>Because blog post is a long query to find amazing people</p>
        </a>

        <a className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>Visit thailand Abbu</h2>
          <p>Because Abbu loves art and temples</p>
        </a>

        <a className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>Got MacBook air ✔️</h2>
          <p>Because desire needs it</p>
        </a>
      </div>
    </main>
  );
}
